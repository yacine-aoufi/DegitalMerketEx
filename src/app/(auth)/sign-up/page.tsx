"use client";
import { Icons } from "@/components/Icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from "@/lib/validators/account-credentials-valid";
import { trpc } from "@/trpc/Client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ZodError } from "zod";
export default function Page() {
  const router=useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });
  const { mutate, isLoading } = trpc.auth.createPayloadUser.useMutation({
    onError: (err) => {
      if (err.data?.code === "CONFLICT") {
        toast.error("this email is already in use. Sign in instead");
        return;
      }
      if (err instanceof ZodError) {
        toast.error(err.issues[0].message);
        return;
      }
      toast.error("Somthing went wrong . Please try again.");
    },
    onSuccess: ({ sentToEmail }) => {
      toast.success(`Verification email sent to ${sentToEmail} .`);
      router.push('verify-email?to='+sentToEmail)
    },
  });
  // console.log(data);

  const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
    mutate({ email, password });
  };

  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20" />

            <h1 className="text-2xl font-bold">create account</h1>
          </div>

          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email"> Email</Label>
                  <Input
                    {...register("email")}
                    placeholder="YourEmail@Examle.com"
                    className={cn({
                      "focus-visible:ring-red-500": errors.email,
                    })}
                  />
                  {
                    errors?.email && (
<p className="text-sm text-red-500">
{errors.email.message}
</p>
                    )
                  }
                </div>
                <div className="grid gap-1 py-2">
                  <Label htmlFor="password"> Password</Label>
                  <Input
                    type="password"
                    {...register("password")}
                    placeholder="Password"
                    className={cn({
                      "focus-visible:ring-red-500": errors.password,
                    })}
                  />
                                    {
                    errors?.password && (
<p className="text-sm text-red-500">
{errors.password.message}
</p>
                    )
                  }
                </div>
                <Button>Sign up</Button>
              </div>
            </form>
          </div>
          <Link
            className={buttonVariants({
              variant: "link",
              className: "gap-1.5",
            })}
            href={"/sign-in"}
          >
            {" "}
            Already have an account ? Sign-in
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
