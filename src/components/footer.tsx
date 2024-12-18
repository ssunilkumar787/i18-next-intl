// import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  // const t = useTranslations("Footer");
  const t = await getTranslations("Footer");

  return (
    <div className="my-10 text-center">
      <p>{t("copyright")}</p>
    </div>
  );
}
