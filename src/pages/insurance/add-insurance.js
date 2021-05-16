import Select from '@paljs/ui/Select';
import { InputGroup } from '@paljs/ui/Input';
import { Card, CardBody } from '@paljs/ui/Card';
import { ButtonLink } from '@paljs/ui/Button';
import { Button } from '@paljs/ui/Button';
import { navigate } from 'gatsby';
import Col from '@paljs/ui/Col';
import Row from '@paljs/ui/Row';
import React from 'react';
import styled from 'styled-components';
import SEO from '../../components/SEO';
import axios from 'axios';
import { Container } from '@material-ui/core';


const Input = styled(InputGroup)`
  margin-bottom: 10px;
`;
const SelectStyled = styled(Select)`
  margin-bottom: 1rem;
`;

const selectOptions = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },
];
const selectGradesOptions = [
  { value: '0', label: '0' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
];

const onAddInsurance = () => {

}
const onChangeStatus = (e) => {
  // v will be true or false
  console.log('Change Status: '+e.target);
  // alert('Change Status'+ e);
}
export default function AddInsurance() {
  return (
    <>
      <SEO title="Add Insurance" />
      <div className="content-wrapper px-4 py-4">

      
      <Card>
          <CardBody>

            <Container>
                <Row>
                  <Col breakPoint={{ xs: 12 }}>
                    <h1 className="text-center mb-5">Add Insurance</h1>
                  </Col>
                </Row>

                <Row className="justify-content-center align-items-center mb-5">
                  <Col className="col-lg-12">
                  <form>
                      <Row>
                        <Col breakPoint={{ xs: 12 }}>
                            <label htmlFor="Name">Name</label>
                            <Input fullWidth size="Medium" className="Name">
                            <input type="text" placeholder="" id="Name" name="Name" onChange ={onChangeStatus.bind(this)}/>
                          </Input>
                        </Col>

                        <Col breakPoint={{ xs: 12 }}>
                          <label htmlFor="GradeRes">GradeRes</label>
                          <SelectStyled options={selectGradesOptions}  placeholder="Select" id="GradeRes" name="GradeRes" onChange ={onChangeStatus.bind(this)} />
                        </Col>

                        <Col breakPoint={{ xs: 12 }}>
                          <label htmlFor="GradePHP">GradePHP</label>
                          <SelectStyled options={selectGradesOptions}  placeholder="Select" id="GradePHP" name="GradePHP" onChange ={onChangeStatus.bind(this)} />
                        </Col>

                        <Col breakPoint={{ xs: 12 }}>
                          <label htmlFor="GradeIOP">GradeIOP</label>
                          <SelectStyled options={selectGradesOptions}  placeholder="Select" id="GradeIOP" name="GradeIOP" onChange ={onChangeStatus.bind(this)} />
                        </Col>

                        <Col breakPoint={{ xs: 12 }}>
                          <label htmlFor="GradeOP">GradeOP</label>
                          <SelectStyled options={selectGradesOptions}  placeholder="Select" id="GradeOP" name="GradeOP" onChange ={onChangeStatus.bind(this)} />
                        </Col>

                        <Col breakPoint={{ xs: 12 }}>
                          <label htmlFor="GradeDET">GradeDET</label>
                          <SelectStyled options={selectGradesOptions}  placeholder="Select" id="GradeDET" name="GradeDET" onChange ={onChangeStatus.bind(this)} />
                        </Col>

                        <Col breakPoint={{ xs: 12 }}>
                          <label htmlFor="JCHO">JCHO</label>
                          <SelectStyled options={selectOptions}  placeholder="Select" id="JCHO" name="JCHO" onChange ={onChangeStatus.bind(this)} />
                        </Col>

                        <Col breakPoint={{ xs: 12 }}>
                          <label htmlFor="CARF">CARF</label>
                          <SelectStyled options={selectOptions}  placeholder="Select" id="CARF" name="CARF" onChange ={onChangeStatus.bind(this)} />
                        </Col>
                        <Col breakPoint={{ xs: 12 }} breakPoint={{ md: 9 }}></Col>
                        <Col breakPoint={{ xs: 12 }} breakPoint={{ md: 3 }}>
                            <Button status="Success" type="button" shape="SemiRound" onClick={onAddInsurance} fullWidth>Save</Button>
                        </Col>
                    </Row>
                    
                  </form> 
                  </Col>
                </Row>

              </Container>

          </CardBody>
        </Card>
        </div>
    </>
  );
}