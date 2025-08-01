import { ArrowBigLeftDashIcon } from "lucide-react"
import Link from "next/link";
import { LoginForm } from "@/components/login-form"
import { signIn } from "next-auth/react"

export default function LoginPage() {
  
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex sticky top-0 left-0 z-10  gap-2 ">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div
              className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <ArrowBigLeftDashIcon className="size-4" />
            </div>
            Back
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" />
      </div>
    </div>
  );
}
