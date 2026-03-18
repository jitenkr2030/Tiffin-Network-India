import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      customerName,
      mobileNumber,
      address,
      area,
      tiffinType,
      quantity,
      deliveryTime,
      startDate,
      specialInstructions,
      totalPrice,
      subscriptionType,
    } = body;

    // Validate required fields
    if (!customerName || !mobileNumber || !address || !area || !tiffinType || !quantity || !deliveryTime || !startDate) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate mobile number (10 digits)
    if (!/^\d{10}$/.test(mobileNumber)) {
      return NextResponse.json(
        { error: "Invalid mobile number format" },
        { status: 400 }
      );
    }

    // Create the order
    const order = await db.tiffinOrder.create({
      data: {
        customerName,
        mobileNumber,
        address,
        area,
        tiffinType,
        quantity: parseInt(quantity),
        deliveryTime,
        startDate: new Date(startDate),
        specialInstructions: specialInstructions || null,
        totalPrice: parseFloat(totalPrice),
        subscriptionType,
        orderStatus: "New Order",
      },
    });

    return NextResponse.json({
      success: true,
      orderId: order.id,
      message: "Order submitted successfully",
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const area = searchParams.get("area");
    const date = searchParams.get("date");

    // Build where clause based on query parameters
    const where: any = {};
    
    if (status) {
      where.orderStatus = status;
    }
    
    if (area) {
      where.area = area;
    }
    
    if (date) {
      // Filter orders for a specific date
      const targetDate = new Date(date);
      const nextDate = new Date(targetDate);
      nextDate.setDate(nextDate.getDate() + 1);
      
      where.startDate = {
        gte: targetDate,
        lt: nextDate,
      };
    }

    const orders = await db.tiffinOrder.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}