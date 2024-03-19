import UserCards from "../ui/user-card";
import { patrick_hand } from "../ui/fonts";

export default function Page() {
  return (
    <div>
      <h2 className={`${patrick_hand.className} text-4xl text-center p-4`}>
        Choose Account
      </h2>
      <p className="p-4">See a record of your checks here and whether they have been processed.</p>
      <div className="flex flex-wrap gap-4 justify-center">
        <UserCards />
      </div>
    </div>
  );
}
