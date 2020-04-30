import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { OutlinedInputProps } from "@material-ui/core/OutlinedInput";
import { InputLabelProps } from "@material-ui/core/InputLabel";
import NumberFormat, { NumberFormatProps } from "react-number-format";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "56px",
      border: "1px solid #E8E8E8",
      overflow: "hidden",
      borderRadius: 3,
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
        color: "#27AE60",
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

declare module "react-number-format" {
  interface NumberFormatProps {
    allowLeadingZeros?: boolean;
  }
}

interface NumberFormatCustomProps extends NumberFormatProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { value: string } }) => void;
}

const NumberFormatCustom = (props: NumberFormatCustomProps) => {
  const { inputRef, allowLeadingZeros, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      isNumericString
      allowLeadingZeros
    />
  );
};

const BccInputText = (
  props: TextFieldProps & {
    isNumeric?: boolean;
    maxLength?: number;
    shrink?: boolean;
    allowLeadingZeros?: boolean;
  }
) => {
  const classes = useStyles({});
  const classes2 = useStyles2({});

  const {
    isNumeric,
    maxLength,
    shrink,
    inputProps,
    InputProps,
    style,
    ...others
  } = props;

  return (
    <TextField
      {...others}
      style={{ marginTop: 24, ...style }}
      inputProps={{
        ...inputProps,
        maxLength,
      }}
      InputLabelProps={
        {
          classes: classes2,
          required: false,
          shrink: shrink,
        } as Partial<InputLabelProps>
      }
      InputProps={
        {
          ...(InputProps as Partial<OutlinedInputProps>),
          classes,
          disableUnderline: true,
          inputComponent: isNumeric ? (NumberFormatCustom as any) : undefined,
        } as Partial<OutlinedInputProps>
      }
    />
  );
};

export default BccInputText;
