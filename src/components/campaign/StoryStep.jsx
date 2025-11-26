import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Heart } from "lucide-react";

export default function StoryStep({ formData, setFormData }) {
  const charCount = formData.story?.length || 0;

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-teal-100 rounded-lg">
          <Heart className="w-7 h-7 text-teal-600" />
        </div>
        <h2 className="text-2xl font-bold">Tell Your Story</h2>
      </div>

      <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
        <p className="text-sm text-teal-800 font-medium">
          Writing tips: Be honest and emotional. Share who you are, what happened, how it affects you, and why you need help. Include personal details that make people feel connected to your journey.
        </p>
      </div>

      <div>
        <Label htmlFor="story">Your Story *</Label>
        <Textarea
          id="story"
          placeholder="Share your story in detail. Who is the patient? What happened? What treatment is needed? How will the funds help? Be genuine and heartfelt."
          className="mt-2 min-h-96 text-base"
          value={formData.story || ""}
          onChange={(e) => setFormData({ ...formData, story: e.target.value })}
        />
        <div className="flex justify-between items-center mt-2">
          <p className="text-sm text-gray-500">
            {charCount} characters — Aim for at least 500 characters for better engagement
          </p>
          {charCount < 500 && (
            <span className="text-sm text-orange-600">Keep writing! More details = more trust</span>
          )}
        </div>
      </div>
    </div>
  );
}