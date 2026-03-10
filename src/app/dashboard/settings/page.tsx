"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Shield, CreditCard, Bell, User, Key, Globe } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="p-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#0a2540]">Settings</h1>
        <p className="text-[#475569]">Manage your platform settings and preferences</p>
      </div>

      {/* Profile Settings */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#f4e4a6]/50 flex items-center justify-center">
              <User className="w-5 h-5 text-[#d4af37]" />
            </div>
            <div>
              <CardTitle>Profile</CardTitle>
              <CardDescription>Update your account information</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="First Name" defaultValue="John" />
            <Input label="Last Name" defaultValue="Doe" />
          </div>
          <Input label="Email" type="email" defaultValue="john@cobalz.com" />
          <Input label="Company" defaultValue="Cobalz Inc" />
          <div className="flex justify-end">
            <Button className="bg-[#d4af37] hover:bg-[#b8960c] text-white">Save Changes</Button>
          </div>
        </CardContent>
      </Card>

      {/* Payment Settings */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payout accounts</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-6 bg-gradient-to-r from-gray-700 to-gray-900 rounded" />
              <div>
                <p className="font-medium text-[#0a2540]">Chase Bank •••• 4242</p>
                <p className="text-sm text-[#64748b]">Default payout account</p>
              </div>
            </div>
            <Badge variant="green">Active</Badge>
          </div>
          <Button variant="outline" className="mt-4 w-full">
            Add New Account
          </Button>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <CardTitle>Security</CardTitle>
              <CardDescription>Protect your account</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <Key className="w-5 h-5 text-[#64748b]" />
              <div>
                <p className="font-medium text-[#0a2540]">Two-Factor Authentication</p>
                <p className="text-sm text-[#64748b]">Add an extra layer of security</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Enable</Button>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[#64748b]" />
              <div>
                <p className="font-medium text-[#0a2540]">API Keys</p>
                <p className="text-sm text-[#64748b]">Manage your API access</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Manage</Button>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <Bell className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Choose what you want to be notified about</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { label: "New merchant signups", checked: true },
              { label: "Large transactions", checked: true },
              { label: "Failed payments", checked: true },
              { label: "Weekly reports", checked: false },
            ].map((item, index) => (
              <label key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <span className="text-[#0a2540]">{item.label}</span>
                <input type="checkbox" defaultChecked={item.checked} className="w-4 h-4 text-[#d4af37] rounded" />
              </label>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
