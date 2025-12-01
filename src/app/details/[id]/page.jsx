import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import campaignsData from '@/campaignsdata'; // your data file
import { Separator } from '@radix-ui/react-select';
import { CheckCircle2, Clock, FileText, Heart, MessageCircle, Share2, ShieldCheck, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// This runs on the server (Next.js App Router)
export default async function CampaignPage({ params }) {
  const { id } = await params;

  // Find the campaign with matching id (convert id to number because params.id is string)
  const campaign = campaignsData.find((camp) => camp.id === Number(id));

  // If campaign not found (invalid ID)
  if (!campaign) {
    return (
      <div>
        <Nav />
        <main className="mt-32 px-10 md:px-20 text-center py-20">
          <h1 className="text-4xl font-bold text-red-600">Campaign Not Found</h1>
          <p className="mt-4 text-gray-600">Sorry, we couldn't find this campaign.</p>
        </main>
        <Footer />
      </div>
    );
  }

  // Calculate progress percentage
  const progress = Math.round((campaign.raised / campaign.goal) * 100);

  return (
    <div>
      <Nav />
      <main className='flex mt-24 px-10 md:px-20'>
        <div className="left flex-4 flex flex-col gap-3">
          <img src={campaign.imageUrl} alt="" className='w-[100%] rounded-lg' />
          <span className='px-[8px] max-w-max py-[3px] text-[0.75rem] text-white bg-blue-500 rounded-full'>{campaign.category}</span>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            {campaign.title}
          </h1>

          <Separator />

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-[var(--color-primary)]" />
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
              <ShieldCheck className="w-8 h-8 text-[var(--color-primary)]" />
              <h2 className="text-2xl font-bold">Verification & Documents</h2>
            </div>

            <Card className="p-6 bg-[var(--color-primary)]/5 border-[var(--color-primary)]/20">
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
                    <FileText className="w-5 h-5 text-green-700" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

        </div>

        <div className="right flex-2 pl-6 ">
          <div className="sticky top-24 flex flex-col gap-6">
            <Card className="overflow-hidden shadow-md border rounded-lg ">

              <div className="px-6 pt-4 pb-8">
                {/* Amount Raised */}
                <div className="text-center mt-6">
                  <h3 className="text-4xl font-extrabold text-emerald-600">
                    Rs {campaign.raised.toLocaleString()}
                  </h3>
                  <p className="text-gray-500 mt-1 text-sm">
                    of Rs {campaign.goal.toLocaleString()} goal
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="w-full bg-blue-700 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 transition-all duration-width duration-1000 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Donors & Days Left */}
                <div className="flex justify-between gap-2 mt-8">
                  <div className="bg-gray-100/90 rounded-2xl flex-1 h-25 py-3 text-center">
                    <div className="flex justify-center">
                      <div className="p-1 bg-gray-100 rounded-full">
                        <Users className="w-4 h-4 text-gray-600" />
                      </div>
                    </div>
                    <p className="text-xl font-bold text-gray-900">{campaign.donors}</p>
                    <p className="text-[0.75rem] text-gray-500">donors</p>
                  </div>
                  <div className="bg-gray-100/90 rounded-2xl flex-1 h-25 py-3 text-center">
                    <div className="flex justify-center">
                      <div className="p-1 bg-gray-100 rounded-full">
                        <Clock className="w-4 h-4 text-gray-600" />
                      </div>
                    </div>
                    <p className="text-xl font-bold text-gray-900">{campaign.daysLeft}</p>
                    <p className="text-[0.75rem] text-gray-500">days left</p>
                  </div>

                </div>

                {/* Donate Button */}
                <Button
                  size="lg"
                  className="mt-3 text-md w-full h-12 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] text-white hover:opacity-90 transition"
                >

                  <Heart className="w-6 h-6 fill-white" />
                  Donate Now
                </Button>

                {/* Share & Contact Buttons */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition flex items-center justify-center gap-2"
                  >
                    <Share2 className="w-5 h-5" />
                    Share
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Contact
                  </Button>


                </div>
              </div>

            </Card>


            {/* Payment Methods */}
            <Card className="overflow-hidden shadow-md border rounded-lg p-6">
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
            </Card>

            {/* Security Badge */}
            <div className="bg-gradient-to-br from-[#2181DF] to-[#3BB2DD] text-white rounded-xl p-6 text-center">
              <ShieldCheck className="w-12 h-12 mx-auto mb-3" />
              <p className="font-bold text-lg">100% Secure</p>
              <p className="text-sm opacity-90">
                Your donation is protected and goes directly to the beneficiary
              </p>
            </div>



          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}