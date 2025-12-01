import { Upload, Shield } from "lucide-react";

export default function DocumentsStep() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="p-3 bg-[var(--color-primary)/0.1] rounded-lg">
          <Shield className="w-7 h-7" style={{ color: "var(--color-primary)" }} />
        </div>
        <h2 className="text-2xl font-bold">Upload Documents</h2>
      </div>

      {/* Info banner (blue → neutral/light primary) */}
      <div className="bg-[var(--color-primary)/0.05] border border-[var(--color-primary)/0.2] rounded-lg p-4">
        <p className="text-sm" style={{ color: "var(--color-primary)" }}>
          Required for verification: All documents are reviewed by our team to ensure authenticity. Your campaign will be marked as "Verified" once approved.
        </p>
      </div>

      {/* Upload areas */}
      <div className="space-y-8">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-gray-400 transition cursor-pointer">
          <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <p className="text-lg font-medium">Medical Reports / Diagnosis *</p>
          <p className="text-sm text-gray-500 mt-2">Click to upload or drag and drop</p>
          <p className="text-xs text-gray-400">PDF, JPG, PNG up to 10MB</p>
          <input type="file" className="hidden" />
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-gray-400 transition cursor-pointer">
          <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <p className="text-lg font-medium">CNIC / Identity Proof *</p>
          <p className="text-sm text-gray-500 mt-2">Click to upload or drag and drop</p>
          <p className="text-xs text-gray-400">PDF, JPG, PNG up to 5MB</p>
          <input type="file" className="hidden" />
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-gray-400 transition cursor-pointer">
          <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <p className="text-lg font-medium">Hospital Cost Estimate Letter *</p>
          <p className="text-sm text-gray-500 mt-2">Click to upload or drag and drop</p>
          <p className="text-xs text-gray-400">PDF, JPG, PNG up to 10MB</p>
          <input type="file" className="hidden" />
        </div>
      </div>

      {/* Bottom info box – now using primary color */}
      <div className="bg-[var(--color-primary)/0.05] border border-[var(--color-primary)/0.2] rounded-lg p-4 text-center">
        <p className="text-sm font-medium" style={{ color: "var(--color-primary)" }}>
          What happens next?
        </p>
        <p className="text-sm mt-1" style={{ color: "var(--color-primary)/0.8" }}>
          Our verification team will review your documents within 48 hours. You'll receive an email notification once your campaign is approved and goes live.
        </p>
      </div>
    </div>
  );
}