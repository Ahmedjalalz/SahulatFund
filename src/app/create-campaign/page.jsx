"use client";

import { useState } from "react";
import { Heart, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import BasicInfoStep from "@/components/campaign/BasicInfoStep";
import StoryStep from "@/components/campaign/StoryStep";
import FinancialStep from "@/components/campaign/FinancialStep";
import DocumentsStep from "@/components/campaign/DocumentsStep";

const steps = [
  { name: "Basic Info", component: BasicInfoStep },
  { name: "Your Story", component: StoryStep },
  { name: "Financial", component: FinancialStep },
  { name: "Documents", component: DocumentsStep },
];

export default function CreateCampaign() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const CurrentComponent = steps[currentStep].component;

  const next = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-500 text-white rounded-full mb-4">
            <Heart className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Create Your Campaign</h1>
          <p className="text-gray-600 mt-2">Tell your story and get the support you need</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Step {currentStep + 1} of {steps.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        {/* Step Indicators */}
        <div className="flex justify-between mb-10 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center z-10">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-medium transition-all ${
                  index <= currentStep
                    ? "bg-teal-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {index < currentStep ? "Check" : index + 1}
              </div>
              <span
                className={`text-xs mt-2 ${
                  index === currentStep ? "text-teal-600 font-bold" : "text-gray-500"
                }`}
              >
                {step.name}
              </span>
            </div>
          ))}
          <div className="absolute top-6 left-12 right-12 h-0.5 bg-gray-300 -z-10">
            <div
              className="h-full bg-teal-500 transition-all duration-300"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <CurrentComponent formData={formData} setFormData={setFormData} />

          {/* Navigation */}
          <div className="flex justify-between mt-12">
            <Button
              variant="outline"
              onClick={prev}
              disabled={currentStep === 0}
              className="px-6"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>

            {currentStep === steps.length - 1 ? (
              <Button className="bg-teal-500 hover:bg-teal-600 px-8">
                <Check className="w-5 h-5 mr-2" />
                Submit for Review
              </Button>
            ) : (
              <Button onClick={next} className="bg-teal-500 hover:bg-teal-600 px-8">
                Next Step
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}