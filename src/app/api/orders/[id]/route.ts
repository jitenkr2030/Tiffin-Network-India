import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { orderStatus } = await request.json();
    
    if (!orderStatus) {
      return NextResponse.json(
        { error: "Order status is required" },
        { status: 400 }
      );
    }

    const validStatuses = ["New Order", "Preparing", "Out for Delivery", "Delivered", "Cancelled"];
    if (!validStatuses.includes(orderStatus)) {
      return NextResponse.json(
        { error: "Invalid order status" },
        { status: 400 }
      );
    }

    const order = await db.tiffinOrder.update({
      where: { id: params.id },
      data: { orderStatus },
    });

    return NextResponse.json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Error updating order:", error);
    return NextResponse.json(
      { error: "Failed to update order" },
      { status: 500 }
    );
  }
}