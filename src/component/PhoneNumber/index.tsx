import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { OutlinedInputProps } from "@material-ui/core/OutlinedInput";
import { InputLabelProps } from "@material-ui/core/InputLabel";
import MaskedInput from "react-maskedinput";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "56px",
      border: "1px solid #E8E8E8",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "#FFFFFF",
      boxSizing: "border-box",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:hover": {
        backgroundColor: "#fff",
      },
      "&$focused": {
        backgroundColor: "#fff",
        border: "2px solid #27AE60",
      },
      "& label.Mui-focused": {
        color: "green",
      },
      "& label": {
        color: "red",
      },
    },
    focused: {},
    disabled: {
      backgroundColor: "#fff",
      color: "#8B98A7",
    },
  })
);

const useStyles2 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: "1px",
    },
  })
);

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

const TextMaskCustom = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask="+7 (111) 111 11 11"
      placeholder={"+7 (707) 707 77 77"}
    />
  );
};

const BccPhoneInputText = (
  props: TextFieldProps & {
    onChangeValue?: (value: string, providerCode: string) => void;
    onChangeProviderCode?: (value: string) => void;
  }
) => {
  const classes = useStyles({});
  const classes2 = useStyles2({});
  const {
    value,
    onChangeValue,
    onChangeProviderCode,
    onChange,
    inputProps,
    ...others
  } = props;

  const onChangeCorrected = (value: string) => {
    if (!!onChangeValue) {
      value = value.replace(/ /g, "").replace("(", "").replace(")", "");
      if (value.length >= 5) {
        onChangeValue(value, value.substr(2, 3));
      } else {
        onChangeValue(value, "");
      }
    }
  };

  return (
    <TextField
      value={value}
      style={{ height: "56px", marginTop: 24 }}
      InputLabelProps={
        {
          shrink: !!value || undefined,
          classes: classes2,
          required: false,
        } as Partial<InputLabelProps>
      }
      onChange={(e: any) => {
        if (!!onChange) {
          onChange(e);
        }
        onChangeCorrected(e.target.value);
      }}
      InputProps={
        {
          classes,
          disableUnderline: true,
          inputComponent: TextMaskCustom as any,
        } as Partial<OutlinedInputProps>
      }
      inputProps={{
        ...inputProps,
        pattern: "^[+][7]\\s[(][7]\\d{2}[)]\\s\\d{3}\\s\\d{2}\\s\\d{2}$",
        title: "Поле должно быть формата +7 (711) 111 11 11",
      }}
      {...others}
    />
  );
};

export default BccPhoneInputText;
