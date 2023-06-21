import React from 'react';
import './contact-form.scss';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('send');
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
  console.log(errors);
  return (
    <section className="contactForm">
      <img className="contactForm__image" src="footer-image.png" alt="footer-image" />
      <form onSubmit={handleSubmit(onSubmit)} className="contactForm__form">
        <div className="contactForm__name">
          <input
            className="contactForm__input"
            type="text"
            placeholder="Name..."
            {...register('name', {
              required: true,
              minLength: 4,
            })}
          />
          <div className="contactForm__validationError">
            {errors.name &&
              (errors.name.type === 'required'
                ? 'This field must be non-empty'
                : 'Name must have more than 3 symbols')}
          </div>
        </div>
        <div className="contactForm__email">
          <input
            className="contactForm__input"
            type="email"
            placeholder="Email..."
            {...register('email', {
              required: true,
            })}
          />
          <div className="contactForm__validationError">
            {errors.email &&
              (errors.email.type === 'required'
                ? 'This field must be non-empty'
                : 'Field is not valid')}
          </div>
        </div>
        <div className="contactForm__message">
          <textarea
            className="contactForm__input"
            placeholder="Message..."
            {...register('message', {
              required: true,
            })}
          />
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
