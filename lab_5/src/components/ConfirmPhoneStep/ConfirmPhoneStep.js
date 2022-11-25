import React from 'react';
import {useFormContext} from 'react-hook-form';
import StepIndicator from '../StepIndicator';
import StepInfo from '../StepInfo';
import FieldGroup from '../FieldGroup';
import {BsFillPencilFill} from 'react-icons/bs';
import {IoMdRefresh} from 'react-icons/io';
import './ConfirmPhoneStep.css';
import Button from '../Button';
import {PatternFormat} from 'react-number-format';

const formStep = 2;

export const ConfirmPhoneStep = ({handleNextStep}) => {
    const {getValues} = useFormContext();
    const phoneNumber = getValues(['countryCode', 'phoneNumber']).join(' ');

    return (
        <>
            <StepIndicator formStep={formStep}/>
            <StepInfo
                title="Registration"
                description="Fill in the registration data. It will take a couple of minutes. All you need is a phone number and e-mail"/>
            <FieldGroup className="confirm-phone">
                <div>
                    <p>{phoneNumber}</p>
                    <p className="is-phone-confirmed">Number not confirmed yet</p>
                </div>
                <BsFillPencilFill color="#007AFF" size="18"/>
            </FieldGroup>
            <div className="confirmation-code-wrap">
                <p className="input-label">Confirmation code</p>
                <div className="confirmation-code">
                    <div>
                        <PatternFormat format="# # # #"
                                       mask="—"
                                       allowEmptyFormatting={true}
                                       valueIsNumericString
                                       className="text-input"/>
                        <p className="field-description">Confirm phone number with code from sms message</p>
                    </div>
                    <button className="send-again">
                        <IoMdRefresh color="#007AFF" size="18"/>Send again
                    </button>
                </div>
            </div>
            <Button className="outline-btn" value="Confirm" onClick={handleNextStep}/>
        </>
    );
};