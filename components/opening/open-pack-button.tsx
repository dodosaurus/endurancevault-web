"use client";

import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

function OpenPackButton({ userHasEnoughCoins }: { userHasEnoughCoins: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending || !userHasEnoughCoins}
      className={
        "w-[10rem] z-10 glassy-button flex justify-center items-center " +
        (!userHasEnoughCoins ? "pointer-events-none w-full" : "")
      }
      aria-disabled={!userHasEnoughCoins}
      tabIndex={userHasEnoughCoins ? 0 : -1}
    >
      {userHasEnoughCoins ? (
        <span className="text-xl w-[9.5rem]">{pending ? <Loader2 className="h-6 w-6 animate-spin ml-10" /> : "Open pack"}</span>
      ) : (
        <span className="text-xl w-[10.5rem] !bg-slate-300 dark:!bg-slate-800 text-slate-500 ">Open pack</span>
      )}
    </button>
  );
}

export default OpenPackButton;
