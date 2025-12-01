import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText } from "lucide-react";

export default function BasicInfoStep({ formData, setFormData }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-[var(--color-primary)]/10 rounded-lg">
          <FileText className="w-7 h-7 text-[var(--color-primary)]" />
        </div>
        <h2 className="text-2xl font-bold">Basic Information</h2>
      </div>

      <div className="space-y-6">
        <div>
          <Label htmlFor="title">Campaign Title *</Label>
          <Input
            id="title"
            placeholder="e.g., Help 8-Year-Old Fatima Fight Cancer"
            className="mt-2 text-lg "
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
            <SelectContent className="bg-white">
              <SelectItem className="hover:bg-[var(--color-primary)]/10" value="cancer">Cancer Treatment</SelectItem>
              <SelectItem className="hover:bg-[var(--color-primary)]/10" value="heart">Heart Disease</SelectItem>
              <SelectItem className="hover:bg-[var(--color-primary)]/10" value="transplant">Organ Transplant</SelectItem>
              <SelectItem className="hover:bg-[var(--color-primary)]/10" value="accident">Accident & Trauma</SelectItem>
              <SelectItem className="hover:bg-[var(--color-primary)]/10" value="rare">Rare Disease</SelectItem>
              <SelectItem className="hover:bg-[var(--color-primary)]/10" value="other">Other Medical</SelectItem>
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