import React from 'react';
import './contact-form.scss';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Element } from 'react-scroll';

const ContactForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const answer = {
      from_name: data.name,
      to_name: 'Alek',
      from_mail: data.email,
      message: data.message,
    };
    emailjs.send(
      process.env.SERVISE_ID ?? '',
      process.env.TEMPLATE_ID ?? '',
      answer,
      process.env.PUBLIC_API_KEY ?? ''
    );
    reset();
  };
  return (
    <section className="contactForm">
      <Element name="ContactForm" />
      <img
        width="100%"
        height="100%"
        loading="lazy"
        className="contactForm__image"
        src="footer-image.webp"
        alt="footer-image"
      />
      <form onSubmit={handleSubmit(onSubmit)} className="contactForm__form">
        <div className="contactForm__name">
          <div className="contactForm__inputBlock">
            <input
              className="contactForm__input"
              type="text"
              placeholder="Name..."
              {...register('name', {
                required: true,
                minLength: 4,
              })}
            />
          </div>
          <div className="contactForm__validationError">
            {errors.name &&
              (errors.name.type === 'required'
                ? 'This field must be non-empty'
                : 'Name must have more than 3 symbols')}
          </div>
        </div>
        <div className="contactForm__email">
          <div className="contactForm__inputBlock">
            <input
              className="contactForm__input"
              type="email"
              placeholder="Email..."
              {...register('email', {
                required: true,
              })}
            />
          </div>
          <div className="contactForm__validationError">
            {errors.email &&
              (errors.email.type === 'required'
                ? 'This field must be non-empty'
                : 'Field is not valid')}
          </div>
        </div>
        <div className="contactForm__message">
          <div className="contactForm__inputBlock">
            <textarea
              className="contactForm__input"
              placeholder="Message..."
              {...register('message', {
                required: true,
              })}
            />
          </div>
          <div className="contactForm__validationError">
            {errors.message &&
              (errors.message.type === 'required'
                ? 'This field must be non-empty'
                : 'Field is not valid')}
          </div>
        </div>
        <button className="contactForm__button_submit" type="submit">
          <span className="contactForm__label">Send</span>
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
