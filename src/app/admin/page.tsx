"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Download, Eye, Edit, CheckCircle, Clock, Truck, XCircle } from "lucide-react";

interface Order {
  id: string;
  customerName: string;
  mobileNumber: string;
  address: string;
  area: string;
  tiffinType: string;
  quantity: number;
  deliveryTime: string;
  startDate: string;
  subscriptionType: string;
  specialInstructions?: string;
  orderStatus: string;
  totalPrice: number;
  createdAt: string;
}

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [areaFilter, setAreaFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    filterOrders();
  }, [orders, searchTerm, statusFilter, areaFilter, dateFilter]);

  const fetchOrders = async () => {
    try {
      const response = await fetch("/api/orders");
      const data = await response.json();
      if (data.success) {
        setOrders(data.orders);
      }
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterOrders = () => {
    let filtered = orders;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(order =>
        order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.mobileNumber.includes(searchTerm) ||
        order.area.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter(order => order.orderStatus === statusFilter);
    }

    // Area filter
    if (areaFilter !== "all") {
      filtered = filtered.filter(order => order.area === areaFilter);
    }

    // Date filter
    if (dateFilter) {
      filtered = filtered.filter(order => {
        const orderDate = new Date(order.startDate).toISOString().split('T')[0];
        return orderDate === dateFilter;
      });
    }

    setFilteredOrders(filtered);
  };

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderStatus: newStatus }),
      });

      if (response.ok) {
        setOrders(orders.map(order =>
          order.id === orderId ? { ...order, orderStatus: newStatus } : order
        ));
      }
    } catch (error) {
      console.error("Failed to update order status:", error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New Order": return "bg-blue-100 text-blue-800";
      case "Preparing": return "bg-yellow-100 text-yellow-800";
      case "Out for Delivery": return "bg-purple-100 text-purple-800";
      case "Delivered": return "bg-green-100 text-green-800";
      case "Cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "New Order": return <Clock className="w-4 h-4" />;
      case "Preparing": return <Edit className="w-4 h-4" />;
      case "Out for Delivery": return <Truck className="w-4 h-4" />;
      case "Delivered": return <CheckCircle className="w-4 h-4" />;
      case "Cancelled": return <XCircle className="w-4 h-4" />;
      default: return null;
    }
  };

  const todayOrders = orders.filter(order => {
    const today = new Date().toISOString().split('T')[0];
    const orderDate = new Date(order.startDate).toISOString().split('T')[0];
    return orderDate === today;
  });

  const todayQuantity = todayOrders.reduce((sum, order) => sum + order.quantity, 0);
  const todayRevenue = todayOrders.reduce((sum, order) => sum + order.totalPrice, 0);

  const areas = [...new Set(orders.map(order => order.area))];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading orders...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Manage tiffin orders and customers</p>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">
              <Download className="w-4 h-4 mr-2" />
              Export Orders
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Today's Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{todayOrders.length}</div>
              <p className="text-sm text-gray-600">Total orders today</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Today's Tiffins</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{todayQuantity}</div>
              <p className="text-sm text-gray-600">Total tiffins today</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Today's Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">₹{todayRevenue}</div>
              <p className="text-sm text-gray-600">Total revenue today</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">Total Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{orders.length}</div>
              <p className="text-sm text-gray-600">All time orders</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Input
                  placeholder="Search by name, phone, area..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="New Order">New Order</SelectItem>
                  <SelectItem value="Preparing">Preparing</SelectItem>
                  <SelectItem value="Out for Delivery">Out for Delivery</SelectItem>
                  <SelectItem value="Delivered">Delivered</SelectItem>
                  <SelectItem value="Cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Select value={areaFilter} onValueChange={setAreaFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Areas</SelectItem>
                  {areas.map(area => (
                    <SelectItem key={area} value={area}>{area}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Orders Table */}
        <Card>
          <CardHeader>
            <CardTitle>Orders ({filteredOrders.length})</CardTitle>
            <CardDescription>
              Manage and track all customer orders
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Area</TableHead>
                    <TableHead>Tiffin Type</TableHead>
                    <TableHead>Qty</TableHead>
                    <TableHead>Delivery</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-mono text-sm">
                        {order.id.slice(0, 8)}...
                      </TableCell>
                      <TableCell className="font-medium">
                        {order.customerName}
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{order.mobileNumber}</div>
                          <div className="text-gray-500 truncate max-w-[150px]">
                            {order.address}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{order.area}</TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{order.tiffinType}</div>
                          <div className="text-gray-500">{order.subscriptionType}</div>
                        </div>
                      </TableCell>
                      <TableCell>{order.quantity}</TableCell>
                      <TableCell>{order.deliveryTime}</TableCell>
                      <TableCell>
                        {new Date(order.startDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="font-medium">
                        ₹{order.totalPrice}
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(order.orderStatus)}>
                          <div className="flex items-center gap-1">
                            {getStatusIcon(order.orderStatus)}
                            {order.orderStatus}
                          </div>
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Select
                            value={order.orderStatus}
                            onValueChange={(value) => updateOrderStatus(order.id, value)}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="New Order">New Order</SelectItem>
                              <SelectItem value="Preparing">Preparing</SelectItem>
                              <SelectItem value="Out for Delivery">Out for Delivery</SelectItem>
                              <SelectItem value="Delivered">Delivered</SelectItem>
                              <SelectItem value="Cancelled">Cancelled</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            {filteredOrders.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No orders found matching your filters.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}