"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { bgHero, Logo } from "@/assets";
import { BiUser, BiLock } from "react-icons/bi";
import { FormField } from "@/components";

type Form = {
  username?: string;
  password?: string;
};

const Login = () => {
  const router = useRouter();

  const [formData, setForm] = useState<Form>({
    username: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <section className="min-h-screen w-screen relative overflow-hidden">
      <Image
        className="max-w-screen w-full h-screen absolute left-0 top-0 object-cover -z-1"
        src={bgHero}
        fill
        alt="bg-hero"
      />
      <div className="bg-white max-w-[620px] h-auto w-full absolute md:inset-x-[80px] inset-y-16 lg:inset-16 rounded-2xl pt-12 px-6 sm:px-12 pb-14 xl:pt-14 xl:px-[90px] xl:pb-[72px] flex flex-col items-center justify-between overflow-y-auto">
        <Image src={Logo} width={150} height={60} alt="Coca" />

        <form
          className="flex flex-col items-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h3 className="text-primary text-3xl font-semibold mb-4">
            Login form
          </h3>
          <p className="text-base text-grey font-normal text-center">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since.
          </p>
          <div className="my-8 w-full">
            <FormField
              label="Username"
              name="username"
              id="username"
              placeholder="Enter username"
              type="text"
              Icon={BiUser}
              className="mb-5"
              onChange={(e) => setForm({ username: e.target.value })}
              value={formData.username}
            />
            <FormField
              label="Password"
              name="password"
              id="password"
              placeholder="Enter password"
              type="password"
              Icon={BiLock}
              className="mb-5"
              onChange={(e) => setForm({ password: e.target.value })}
              value={formData.password}
            />
            <Link
              href="#!"
              className="text-secondary text-base font-semibold hover:underline"
            >
              Forgot Password
            </Link>
          </div>
          <Button
            type="submit"
            text="Running order"
            classNames="w-full"
            filled
            disabled={!formData}
          />
        </form>
        <Link href="#!" className="text-base font-normal text-grey">
          End user agreement
        </Link>
      </div>
    </section>
  );
};

export default Login;
