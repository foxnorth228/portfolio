import React from 'react';
import './contact-form.scss';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
  const onSubmit = () => {};
  return (
    <section className="contactForm">
      <img className="contactForm__image" src="footer-image.png" alt="footer-image" />
      <form onSubmit={handleSubmit(onSubmit)} className="contactForm__form">
        <div className="contactForm__name">
          <input
            className="contactForm__input"
            type="text"
            placeholder="Name..."
            {...register('name')}
          />
        </div>
        <div className="contactForm__email">
          <input
            className="contactForm__input"
            type="email"
            placeholder="Email..."
            {...register('email')}
          />
        </div>
        <div className="contactForm__message">
          <textarea
            className="contactForm__input"
            placeholder="Message..."
            {...register('message')}
          />
        </div>
        <button className="contactForm__button_submit" type="submit">
          <span className="contactForm__label">Send</span>
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
