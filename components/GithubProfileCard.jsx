import React, { useState } from 'react';

import { Card, Col, Row, Container } from 'reactstrap';

import SocialLinks from '../components/SocialLinks';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const GithubProfileCard = ({ prof }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=alfaizkhan.work@gmail.com&su=${Subject}&body=${message}`;
  // const url = `https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=alfaizkhan.work@gmail.com&amp;cc=${email}&amp;su=${Subject}&amp;body=${message}`;
  return (
    <Card className='section-lg bg-gradient-info shadow-lg border-0'>
      <Container className=''>
        <div className='p-2'>
          <Row className=''>
            <Col className='order-lg-2' lg='4'>
              <img
                src={prof.avatar_url}
                style={{ width: '200px' }}
                alt=''
                className='rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4'
              />
            </Col>
            <Col lg='8' className='order-lg-1'>
              <h2 className='text-white'>Reach Out to me!</h2>
              <p className='lead text-white mt-3'>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL</p>
              <p className='text-white mt-3'>{prof.bio}</p>
              <div className='my-3 icon-shape bg-gradient-white shadow rounded text-info'>
                <i className='ni ni-pin-3 text-info mr-2' />
                {prof.location}
              </div>
              <SocialLinks />
            </Col>
          </Row>
          {/* <div>
            <div className='row '>
              <div className='col-md-12 '>
                <p className='text-white mt-5'>{}</p>

                <div className='contact_inner'>
                  <div className='row'>
                    <div className='col-md-10'>
                      <div className='contact_form_inner'>
                        <div className='contact_field'>
                          <h3>Contatc Us</h3>
                          <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                          <input
                            type='text'
                            className='form-control form-group'
                            placeholder='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                          <input
                            type='text'
                            className='form-control form-group'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <input
                            type='text'
                            className='form-control form-group'
                            placeholder='Title'
                            value={Subject}
                            onChange={(e) => setSubject(e.target.value)}
                          />
                          <textarea
                            className='form-control form-group'
                            placeholder='Message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          />
                          <a
                            className='button.contact_form_submit'
                            href={url}
                            Style='background: linear-gradient(to top right, #11c3ef -5%, #117aef 100%);border: none;color: #fff;padding: 10px 15px;width: 100%;margin-top: 25px;border-radius: 35px;cursor: pointer; fosize: 14px;letter-spacing: 2px;display: block; text-align: center;'
                            onClick={() => {
                              setTimeout(() => {
                                setName('');
                                setEmail('');
                                setSubject('');
                                setMessage('');
                              }, 2500);
                              // }, 2500);
                            }}
                          >
                            Send
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='contact_info_sec'>
                    <h2 className='text-white'>Reach Out to me!</h2>
                    <h className='text-white'>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL</h>

                    <div className='d-flex info_single align-items-center  '>
                      <span>+91 62607 86975</span>
                    </div>
                    <div className='d-flex info_single align-items-center'>
                      <span>Alfaizkhan.work@gmail.com</span>
                    </div>
                    <div className='d-flex info_single align-items-center'></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
