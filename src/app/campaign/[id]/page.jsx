// app/campaign/[id]/page.jsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  ShieldCheck,
  Users,
  Clock,
  Share2,
  MessageCircle,
  FileText,
  Calendar,
  CheckCircle2,
} from "lucide-react";

// Mock data — replace with real fetch later
const campaignData = {
  id: "123",
  title: "Help 8-Year-Old Fatima Fight Cancer",
  beneficiary: "Fatima Khan",
  organizer: "Ahmed Khan",
  location: "Lahore, Pakistan",
  category: "Medical Emergency",
  raised: 250000,
  goal: 500000,
  donors: 142,
  daysLeft: 18,
  story: `Fatima is a bright, cheerful 8-year-old who loves drawing and playing with her younger brother. Three months ago, her world turned upside down when she was diagnosed with acute lymphoblastic leukemia.

Her father works as a taxi driver, and her mother is a homemaker. The family has already spent their life savings on initial tests and consultations. The cost of chemotherapy, medications, and hospital care is far beyond what they can afford.

Every day counts in Fatima’s battle. Your contribution, no matter how small, brings her one step closer to recovery. The family has consulted with specialists at Shaukat Khanum Memorial Hospital, and with proper treatment, Fatima has an excellent chance of full recovery.

Please help us give Fatima the childhood she deserves. Your generosity can restore hope to this family and save a precious life.`,
  updates: [
    {
      date: "2024-03-15",
      title: "Second Chemotherapy Session Completed",
      content: "Fatima completed her second round of chemotherapy today. The doctors are pleased with her progress. Thank you for your continued support.",
    },
    {
      date: "2024-03-08",
      title: "Treatment Started",
      content: "We've started the treatment at Shaukat Khanum Hospital. Fatima is brave and hopeful. Your donations are making this possible.",
    },
    {
      date: "2024-03-01",
      title: "Campaign Launched",
      content: "With heavy hearts but hopeful spirits, we're reaching out to the community for help. Please share our story.",
    },
  ],
  documents: [
    "Medical Reports - Shaukat Khanum Hospital",
    "Doctor's Treatment Plan",
    "Cost Estimate Letter",
    "Family Income Certificate",
  ],
};

export default function CampaignPage({ params }) {
  const campaign = campaignData; // In real app: fetch by params.id

  if (!campaign) return notFound();

  const percentage = Math.round((campaign.raised / campaign.goal) * 100);

  return (
    <>
      {/* Navbar */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-teal-600">SahulatFund</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-gray-700">
            <Link href="/campaigns" className="hover:text-teal-600">Campaigns</Link>
            <Link href="/faq" className="hover:text-teal-600">FAQ</Link>
            <Link href="/about" className="hover:text-teal-600">About</Link>
          </nav>
          <div className="flex gap-3">
            <Button variant="outline">Dashboard</Button>
            <Button className="bg-teal-500 hover:bg-teal-600">Start Campaign</Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Story */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Meta */}
            <div>
              <Badge className="mb-3 bg-blue-100 text-blue-700">
                {campaign.category}
              </Badge>
              <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                {campaign.title}
              </h1>
              <p className="text-gray-600 mt-3">
                By <span className="font-medium">{campaign.organizer}</span> • {campaign.location}
              </p>
            </div>

            <Separator />

            {/* Story */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-teal-500" />
                <h2 className="text-2xl font-bold">The Story</h2>
              </div>
              <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                {campaign.story.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            <Separator />

            {/* Verification & Documents */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-8 h-8 text-teal-500" />
                <h2 className="text-2xl font-bold">Verification & Documents</h2>
              </div>

              <Card className="p-6 bg-teal-50 border-teal-200">
                <div className="flex items-center gap-3 text-teal-700 font-medium mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  This campaign has been verified
                </div>
                <p className="text-sm text-gray-600">
                  All medical documents and identity proofs have been authenticated by our team
                </p>
                <div className="mt-4 space-y-3">
                  {campaign.documents.map((doc, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <FileText className="w-5 h-5 text-gray-500" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <Separator />

            {/* Updates */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-8 h-8 text-teal-500" />
                <h2 className="text-2xl font-bold">Campaign Updates</h2>
              </div>

              <div className="space-y-6">
                {campaign.updates.map((update, i) => (
                  <Card key={i} className="p-6 border-l-4 border-teal-500 bg-gray-50">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg">{update.title}</h3>
                      <span className="text-sm text-gray-500">{update.date}</span>
                    </div>
                    <p className="text-gray-700">{update.content}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Donation Box (Sticky) */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 p-6 shadow-xl rounded-2xl border">
              <div className="space-y-6">
                {/* Progress */}
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-4xl font-bold text-teal-600">
                      Rs {campaign.raised.toLocaleString()}
                    </span>
                    <span className="text-gray-500">
                      of Rs {campaign.goal.toLocaleString()} goal
                    </span>
                  </div>
                  <Progress value={percentage} className="h-4" />
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="flex justify-center mb-1">
                      <Users className="w-6 h-6 text-gray-600" />
                    </div>
                    <p className="text-2xl font-bold">{campaign.donors}</p>
                    <p className="text-sm text-gray-600">donors</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="flex justify-center mb-1">
                      <Clock className="w-6 h-6 text-gray-600" />
                    </div>
                    <p className="text-2xl font-bold text-orange-600">{campaign.daysLeft}</p>
                    <p className="text-sm text-gray-600">days left</p>
                  </div>
                </div>

                {/* Donate Button */}
                <Button size="lg" className="w-full bg-teal-500 hover:bg-teal-600 text-lg font-semibold">
                  <Heart className="w-6 h-6 mr-3" />
                  Donate Now
                </Button>

                {/* Share & Contact */}
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">
                    <Share2 className="w-5 h-5 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contact
                  </Button>
                </div>

                <Separator />

                {/* Payment Methods */}
                <div>
                  <h4 className="font-semibold mb-4">Accepted Payment Methods</h4>
                  <div className="space-y-3">
                    {["JazzCash & EasyPaisa", "All Major Banks", "Credit/Debit Cards"].map((method) => (
                      <div key={method} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        <span className="text-sm">{method}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Security Badge */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center">
                  <ShieldCheck className="w-12 h-12 mx-auto mb-3" />
                  <p className="font-bold text-lg">100% Secure</p>
                  <p className="text-sm opacity-90">
                    Your donation is protected and goes directly to the beneficiary
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">SahulatFund</span>
            </div>
            <p className="text-gray-400 text-sm">Connecting hearts. Saving lives.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/campaigns">All Campaigns</Link></li>
              <li><Link href="/how-it-works">How It Works</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm">support@sahulatfund.pk</p>
            <p className="text-gray-400 text-sm">+92 300 1234567</p>
          </div>
        </div>
      </footer>
    </>
  );
}