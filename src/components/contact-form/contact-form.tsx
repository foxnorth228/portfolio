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
        <input
          className="contactForm__input contactForm__input_name"
          type="text"
          placeholder="Name..."
          {...register('name')}
        />
        <input
          className="contactForm__input contactForm__input_email"
          type="email"
          placeholder="Email..."
          {...register('email')}
        />
        <textarea
          className="contactForm__input contactForm__input_fieldset"
          placeholder="Message..."
          {...register('message')}
        />
        <button className="contactForm__button_submit2" type="submit">
          <span className="contactForm__button_submit2__label">Send</span>
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
