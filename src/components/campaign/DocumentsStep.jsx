import { Upload, Shield } from "lucide-react";

export default function DocumentsStep() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-teal-100 rounded-lg">
          <Shield className="w-7 h-7 text-teal-600" />
        </div>
        <h2 className="text-2xl font-bold">Upload Documents</h2>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          Required for verification: All documents are reviewed by our team to ensure authenticity. Your campaign will be marked as "Verified" once approved.
        </p>
      </div>

      <div className="space-y-8">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-gray-400 transition">
          
          <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <p className="text-lg font-medium">Medical Reports / Diagnosis *</p>
          <p className="text-sm text-gray-500 mt-2">Click to upload or drag and drop</p>
          <p className="text-xs text-gray-400">PDF, JPG, PNG up to 10MB</p>
          <input type="file" className="hidden" />
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-gray-400 transition">
          <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <p className="text-lg font-medium">CNIC / Identity Proof *</p>
          <p className="text-sm text-gray-500 mt-2">Click to upload or drag and drop</p>
          <p className="text-xs text-gray-400">PDF, JPG, PNG up to 5MB</p>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-gray-400 transition">
          <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <p className="text-lg font-medium">Hospital Cost Estimate Letter *</p>
          <p className="text-sm text-gray-500 mt-2">Click to upload or drag and drop</p>
          <p className="text-xs text-gray-400">PDF, JPG, PNG up to 10MB</p>
        </div>
      </div>

      <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 text-center">
        <p className="text-sm font-medium text-teal-800">
          What happens next?
        </p>
        <p className="text-sm text-teal-700 mt-1">
          Our verification team will review your documents within 48 hours. You'll receive an email notification once your campaign is approved and goes live.
        </p>
      </div>
    </div>
  );
}