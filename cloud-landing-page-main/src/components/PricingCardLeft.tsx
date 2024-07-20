import { GetStarted } from "./GetStarted";
import { mappeddataCheckmark } from "./Pricing";


export function PricingCardLeft(): JSX.Element {
  return (
    <div className="text-2xl">
      <p className="text-2xl py-8 text-slate-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis,
        eligendi?
      </p>
      {mappeddataCheckmark}
      <GetStarted />
    </div>
  );
}
