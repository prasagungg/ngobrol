import Link from "next/link";
import AuthLayout from "@/components/layouts/AuthLayout";
import TextField from "@/components/form/TextField";

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="w-[20rem] py-6 px-4 min-h-[20rem]">
        <form>
          <TextField
            type="email"
            label={"Email"}
            placeholder={`Masukan Email`}
          />
          <TextField
            type="email"
            label={"Email"}
            placeholder={`Masukan Email`}
          />
        </form>
        <div className="mt-6">
          <p>
            Belum punya akun,{" "}
            <Link
              className="text-blue underline text-blue-400"
              href="/register"
            >
              Daftar
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
