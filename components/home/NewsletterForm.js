import { useState } from 'react';
import { decode } from 'html-entities';
import useTranslation from "next-translate/useTranslation";
import { useRouter } from 'next/router';
const NewsletterForm = ({ status, message, onValidated }) => {

  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);
  const [isClosed, setIsClosed] = useState(false);

  const { locale } = useRouter()
  const currentDir = locale === 'ar' ? 'rtl' : 'ltr'



  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {



    setError(null);

    if (!email) {
      setError('Please enter a valid email address');
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split('-') ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  }



  const { t } = useTranslation("common");

  return (
    <>

      <div className={styles.dFlex} dir={currentDir}>
        <div className={styles.EmailInput}>
          <div className={styles.NewslatterTitle}>
            <h2>{t("NewslatterTitlep1")}</h2>
            <h2>{t("NewslatterTitlep2")}</h2>
          </div>
          <div className={styles.input}>
            <div className={styles.inputBtn}>
              <input
                onChange={(event) => setEmail(event?.target?.value ?? '')}
                type="email"
                placeholder={t("NewslatterplaceHolder")}
                onKeyUp={(event) => handleInputKeyEvent(event)}
              />
              <button className={styles.Btn} onClick={() => { handleFormSubmit(); setIsClosed(!isClosed) }}>
                {t("NewslatterSubscription")}
              </button>
            </div>
          </div>
        </div>
      </div>
      {
        status === "sending" && (
          isClosed && (
            < div className={styles.Overlay} onClick={() => setIsClosed(!isClosed)} >
              <div className={styles.Massege}>
                <div className={styles.close} onClick={() => setIsClosed(!isClosed)}>
                </div>
                <div className={styles.sendMsg}>Sending...</div>
              </div>
            </div>
          )
        )
      }
      {
        status === "error" || error ? (
          isClosed && (
            < div className={styles.Overlay} onClick={() => setIsClosed(!isClosed)} >
              <div className={styles.Massege}>
                <div className={styles.close} onClick={() => setIsClosed(!isClosed)}>
                </div>
                <div
                  className={styles.sendMsg}
                  dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
                />          </div>
            </div>
          )) : null
      }
      {
        status === "success" && status !== "error" && !error && (
          isClosed && (
            < div className={styles.Overlay} onClick={() => setIsClosed(!isClosed)} >
              <div className={styles.Massege}>
                <div className={styles.close} onClick={() => setIsClosed(!isClosed)}>
                </div>
                <div dangerouslySetInnerHTML={{ __html: decode(message) }} />
              </div>


            </div>
          ))
      }


    </>
  );
}


export default NewsletterForm
{/* {isClosed ? (
    < div className={styles.Overlay} onClick={() => setIsClosed(!isClosed)} >
      <div className={styles.Massege}>
        <div className={styles.close} onClick={() => setIsClosed(!isClosed)}>
        </div>
        <h2>sadfsad</h2>
        {status === "sending" && <div>Sending...</div>}
        {status === "error" || error ? (
          <div
            className="newsletter-form-error"
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {status === "success" && status !== "error" && !error && (
          <div dangerouslySetInnerHTML={{ __html: decode(message) }} />
        )}
      </div>
    </div>
  ) : null} */}