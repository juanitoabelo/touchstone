import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import { Checkbox } from '@paljs/ui/Checkbox';
import React from 'react';
import { Link } from 'gatsby';
import { Section, Col, Container, Row, Form } from 'react-bootstrap';

import Auth, { Group } from '../components/Auth';
import Socials from '../components/Auth/Socials';
import SEO from '../components/SEO';

export default function Login() {
  const onCheckbox = () => {
    // v will be true or false
  };
  return (
    // <Auth title="Login" subTitle="Hello! Login with your email">
    //   <SEO title="Login" />
    //   <form>
    //     <InputGroup fullWidth>
    //       <input type="email" placeholder="Email Address" />
    //     </InputGroup>
    //     <InputGroup fullWidth>
    //       <input type="password" placeholder="Password" />
    //     </InputGroup>
    //     <Group>
    //       <Checkbox onChange={onCheckbox}>Remember me</Checkbox>
    //       <Link to="/auth/request-password">Forgot Password?</Link>
    //     </Group>
    //     <Button status="Success" type="button" shape="SemiRound" fullWidth>
    //       Login
    //     </Button>
    //   </form>
    //   <Socials />
    //   <p>
    //     Don&apos;t have account? <Link to="/auth/register">Register</Link>
    //   </p>

    // </Auth>

    <Section className="section py-0 position-relative">
        <video id="main-video" class="video-fluid" autoplay loop muted>
            <source src="/assets/landingpage/videos/electronic-circuit-board-with-artificial-intellige-M7S9W3B.mp4" type="video/mp4"></source>
        </video>
         <Section id="front-page-content"  className="d-flex content position-fixed w-100 h-100 justify-content-center align-items-center">
            <Container className="container">
                <Row className="row justify-content-center align-items-center mx-auto">
                    <Col className="col-md-8 col-lg-6">
                        
                    <div id="login-form" class="custom-form login-body mx-auto rounded mb-4" style="opacity:0; animation-name: fadeIn; animation-duration: 2.3s; -webkit-animation-delay:4s; animation-delay:4s; animation-fill-mode: forwards;">
                            <div class="form-wrapper rounded">
                                <div id="message"></div>
                                
                                <Link to="/" className="login-brand" title="Go to home page">
                                    <Img src="/assets/landingpage/images/touchstone-logo.png" alt="Touchstone Logo"></Img>
                                </Link>
                                <h3 class="login-heading"><span class="d-block text-uppercase">Sign in</span><span class="d-block admin text-uppercase">To Touchstone Admin</span></h3>
                                
                                
                                <Form method="post" action="/login/" name="contact-form" id="contact-form">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group position-relative">
                                                <label class="control-label" for="username">Username</label>
                                                <input class="form-control" id="username" name="user" type="text" required="" autocomplete="off"></input>
                                                <i class="fas fa-user" aria-hidden="true"></i>
                                            </div>
                                            <div class="form-group position-relative">
                                                <label class="control-label" for="password">Password</label>
                                                <input class="form-control" id="password" name="pass" type="password" required="" autocomplete="off"></input>
                                                <i class="fas fa-lock-alt" aria-hidden="true"></i>
                                            </div>

                                        </div>
                                        
                                    </div>

                                    <div class="row">
                                        <div class="col-sm-12 text-center mb-4">
                                            <button class="btn btn-success btn-block hover-arrow-center" type="submit">Login</button>
                                            <div id="simple-msg"></div>
                                        </div>
                                    </div>
                                </Form>

                                <p class="forgot mb-2"><a class="font-400" href="/recoverpass/" title="Recover your password">Forgot your password?</a></p>

                            </div>
                        </div>
                        <p class="login-link mb-2 text-center"><a class="font-400" href="#" title="Login">Login</a></p> 

                    </Col>
                </Row>
            </Container>
         </Section>

     </Section>

  );
}