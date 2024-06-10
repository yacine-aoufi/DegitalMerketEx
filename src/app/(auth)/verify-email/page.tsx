import VerifyEmail from "@/components/VerifyEmail";
import Image from "next/image";
import React from "react";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export default function Page({ searchParams }: PageProps) {
  const token = searchParams.token;
  const toEmail = searchParams.to;

  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        {token && typeof token === "string" ? (
          <div className="gird gap-6 ">


<VerifyEmail token={token}/>
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1 lg:w-100">
            <div className="relative mt-4 h-60 w-60 text-muted-foreground">
              <Image
                src={"/hippo-email-sent.png"}
                fill
                alt="hippo email sent image"
              />
            </div>
            <h3 className="font-semibold text-2xl">check Your email</h3>
            {toEmail ? (
              <p className="text-muted-foreground text-center"> 
                We&apos;ve send a verification link your email{" "}
                <span className="font-semibold">{toEmail}.</span>
              </p>
            ) : (
              <p className="text-muted-foreground text-center">We&apos;ve send a verification link your email .</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
