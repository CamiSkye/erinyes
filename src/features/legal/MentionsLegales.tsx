import { useTranslation } from "react-i18next";

export default function MentionsLegales() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-sm leading-relaxed">
      <h1 className="text-3xl font-bold mb-8">
        {t("legal.title")}
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">
          {t("legal.editor.title")}
        </h2>

        <p>{t("legal.editor.name")}</p>

        <p>
          {t("legal.editor.contact")} : erinyes.contact@gmail.com
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">
          {t("legal.hosting.title")}
        </h2>

        <p>{t("legal.hosting.company")}</p>
        <p>{t("legal.hosting.address1")}</p>
        <p>{t("legal.hosting.address2")}</p>
        <p>{t("legal.hosting.country")}</p>

        <p>
          {t("legal.hosting.website")} :
          <a
            href="https://www.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline ml-1"
          >
            https://www.netlify.com
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">
          {t("legal.intellectualProperty.title")}
        </h2>

        <p>{t("legal.intellectualProperty.paragraph1")}</p>
        <p>{t("legal.intellectualProperty.paragraph2")}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">
          {t("legal.personalData.title")}
        </h2>

        <p>{t("legal.personalData.paragraph1")}</p>
        <p>{t("legal.personalData.paragraph2")}</p>
        <p>{t("legal.personalData.paragraph3")}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">
          {t("legal.cookies.title")}
        </h2>

        <p>{t("legal.cookies.paragraph1")}</p>
        <p>{t("legal.cookies.paragraph2")}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">
          {t("legal.liability.title")}
        </h2>

        <p>{t("legal.liability.paragraph1")}</p>
        <p>{t("legal.liability.paragraph2")}</p>
        <p>{t("legal.liability.paragraph3")}</p>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-2">
          {t("legal.contact.title")}
        </h2>

        <p>erinyes.contact@gmail.com</p>
      </section>
    </div>
  );
}