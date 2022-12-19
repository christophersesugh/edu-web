import React from "react";
import { useRouter } from "next/router";

type CheckUserProps = {
  user: any;
  children: React.ReactNode | React.ReactNode[];
};

export default function CheckUser({ user, children }: CheckUserProps) {
  const router = useRouter();
  React.useEffect(() => {
    if (!user || user === null) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return <>{children}</>;
}
