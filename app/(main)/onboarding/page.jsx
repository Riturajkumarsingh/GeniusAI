import { getUserOnboardingStatus } from "@/action/user";
import { industries } from "@/data/industries";
import OnboardingForm from "./_components/onboarding-form";
import { redirect } from "next/navigation";


const OnboardingPage = async() => {
    
    // check if user is logged in
    const { isOnboarded } = await getUserOnboardingStatus();

    if (isOnboarded) {
      redirect("/dashboard");
    }

  return (
    <main>
        <OnboardingForm industries={industries} />
    </main>
  )
}

export default OnboardingPage;