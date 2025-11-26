import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DollarSign } from "lucide-react";

export default function FinancialStep({ formData, setFormData }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-teal-100 rounded-lg">
          <DollarSign className="w-7 h-7 text-teal-600" />
        </div>
        <h2 className="text-2xl font-bold">Financial Details</h2>
      </div>

      <div>
        <Label htmlFor="goal">Fundraising Goal (PKR) *</Label>
        <Input
          id="goal"
          type="number"
          placeholder="500000"
          className="mt-2 text-lg font-medium"
          value={formData.goal || ""}
          onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
        />
        <p className="text-sm text-gray-500 mt-2">Enter the total amount needed for treatment</p>
      </div>

      <div>
        <Label htmlFor="breakdown">Cost Breakdown *</Label>
        <Textarea
          id="breakdown"
          placeholder={`Example:\nSurgery: ₨300,000\nChemotherapy (6 Cycles): ₨150,000\nMedications: ₨30,000\nHospital Stay: ₨20,000\nTotal: ₨500,000`}
          className="mt-2 min-h-64 font-mono text-sm"
          value={formData.breakdown || ""}
          onChange={(e) => setFormData({ ...formData, breakdown: e.target.value })}
        />
        <p className="text-sm text-gray-500 mt-2">Provide a detailed breakdown of how the funds will be used</p>
      </div>
    </div>
  );
}