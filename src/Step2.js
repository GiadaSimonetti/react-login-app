import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useData } from "./DataContext";
import MainContainer from "./components/MainContainer";
import FormContainer from "./FormContainer";
import MainButton from "./components/MainButton";
import FormElement from "./components/FormElement";

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  > p {
    font-size: 20px;
  }
`;

const BoldText = styled.span`
  font-size: 20px;
  color: #a19f9f;
  font-weight: bold;
`;

const ImputContainer = styled.div`
  margin-top: 20px;
`;

const ImputGroup = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  > label {
    color: black;
    font-weight: lighter;
    font-size: 1.25rem;
    padding-bottom: 2px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
  }
  > input[type="radio" i] {
    margin: 3px 10px 0px 5px;
  }
`;

const Step2 = () => {
  const { setValues, data } = useData();
  const history = useHistory();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      validation: ["A"],
    },
  });

  const onSubmit = (data) => {
    history.push("./step3");
    setValues(data);
  };

  const CapitalizedLastName =
    data?.lastName?.charAt(0).toUpperCase() + data?.lastName?.slice(1);

  const UppercasePostCode = data?.postCode.toUpperCase();

  return (
    <MainContainer style={{ flexDirection: "column" }}>
      {data && (
        <InformationContainer>
          <p>
            <BoldText>Last Name: </BoldText>
            <span>{CapitalizedLastName}</span>
          </p>
          <p>
            <BoldText>Date of Birth: </BoldText>
            <span>{data.dateOfBirth}</span>
          </p>
          <p>
            <BoldText>Post Code: </BoldText>
            <span>{UppercasePostCode}</span>
          </p>
        </InformationContainer>
      )}

      <FormContainer>
        <h2 style={{ color: "#a19f9f" }}>Step 2</h2>
        <FormElement onSubmit={handleSubmit(onSubmit)}>
          <section>
            <BoldText>Please choose a method of validation:</BoldText>
            <ImputContainer>
              <ImputGroup>
                <input
                  {...register("validation")}
                  type="radio"
                  id="phone"
                  value="phone"
                />
                <label htmlFor="phone">
                  <b>Phone Call</b> (+44*****123)
                </label>
              </ImputGroup>
              <ImputGroup>
                <input
                  {...register("validation")}
                  type="radio"
                  id="mobile"
                  value="mobile"
                />
                <label htmlFor="mobile">
                  <b>Text to Mobile</b> (+44*******789)
                </label>
              </ImputGroup>
              <ImputGroup>
                <input
                  {...register("validation")}
                  type="radio"
                  id="email"
                  value="email"
                />
                <label htmlFor="email">
                  <b>Email</b> (a***********@gmail.com)
                </label>
              </ImputGroup>
            </ImputContainer>
          </section>
          <MainButton>Next</MainButton>
        </FormElement>
      </FormContainer>
    </MainContainer>
  );
};

export default Step2;
