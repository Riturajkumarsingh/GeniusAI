import { getIndustryInsights } from "@/action/dashboard";
import { getUserOnboardingStatus } from "@/action/user";
import { redirect } from "next/navigation";
import Dashboardview from "./_components/dashboard-view";


const IndustryInsightsPage = async() => {

    const { isOnboarded } = await getUserOnboardingStatus();
    const insights = await getIndustryInsights();


  if (!isOnboarded) {
    redirect("/onboarding");
  }
  return (
    <div className="container mx-auto">
      <Dashboardview insights={insights}/>
    </div>
  )
}

export default IndustryInsightsPage