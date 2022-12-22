import React, { useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from './newsletterForm';
import LoadingSpinner from '../loading/loading';

function NewsLetterSubscribe() {
  const MAILCHIMP_URL = process.env.REACT_APP_MAILCHIMP_URL;
  //   const MAILCHIMP_LIST_ID = process.env.REACT_APP_MAILCHIMP_LIST_ID;

  const [loading, setLoading] = useState(false);

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      //   listId={MAILCHIMP_LIST_ID}
      render={(props) => {
        const { status, message, subscribe } = props || {};
        return (
          <>
            {loading && <LoadingSpinner />}
            {!loading && (
              <NewsletterForm
                status={status}
                message={message}
                onValidate={(formData) => {
                  // console.log('formData', formData);
                  setLoading(true)
                  subscribe(formData)
                    .then(() => {
                      console.log('then called', loading);
                      setLoading(false)
                    })
                    .catch((e) => {
                      console.log('catch called', e);
                      setLoading(false)
                    });
                }}
              />
            )}
          </>
        )
      }}
    />
  );
}

export default NewsLetterSubscribe;
