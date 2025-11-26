import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText } from "lucide-react";

export default function BasicInfoStep({ formData, setFormData }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-teal-100 rounded-lg">
          <FileText className="w-7 h-7 text-teal-600" />
        </div>
        <h2 className="text-2xl font-bold">Basic Information</h2>
      </div>

      <div className="space-y-6">
        <div>
          <Label htmlFor="title">Campaign Title *</Label>
          <Input
            id="title"
            placeholder="e.g., Help 8-Year-Old Fatima Fight Cancer"
            className="mt-2 text-lg"
            value={formData.title || ""}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
          <p className="text-sm text-gray-500 mt-2">
            Make it clear, emotional, and specific. This is what people see first.
          </p>
        </div>

        <div>
          <Label>Category *</Label>
          <Select
            value={formData.category || ""}
            onValueChange={(value) => setFormData({ ...formData, category: value })}
          >
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cancer">Cancer Treatment</SelectItem>
              <SelectItem value="heart">Heart Disease</SelectItem>
              <SelectItem value="transplant">Organ Transplant</SelectItem>
              <SelectItem value="accident">Accident & Trauma</SelectItem>
              <SelectItem value="rare">Rare Disease</SelectItem>
              <SelectItem value="other">Other Medical</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="location">Location (City, Pakistan) *</Label>
          <Input
            id="location"
            placeholder="e.g., Lahore, Pakistan"
            className="mt-2"
            value={formData.location || ""}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}