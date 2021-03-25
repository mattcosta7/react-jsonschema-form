import CoreForm from "@rjsf/core";
import { JSONSchema7 } from "json-schema";
import React from "react";
import renderer from "react-test-renderer";
import Form from "../src/index";

describe("single fields", () => {
  describe("string field", () => {
    test("regular", () => {
      const schema: JSONSchema7 = {
        type: "string",
      };
      const tree = renderer.create(<Form schema={schema} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    test("format email", () => {
      const schema: JSONSchema7 = {
        type: "string",
        format: "email",
      };
      const tree = renderer.create(<Form schema={schema} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    test("format uri", () => {
      const schema: JSONSchema7 = {
        type: "string",
        format: "uri",
      };
      const tree = renderer.create(<Form schema={schema} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    test("format data-url", () => {
      const schema: JSONSchema7 = {
        type: "string",
        format: "data-url",
      };
      const tree = renderer.create(<Form schema={schema} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  test("number field", () => {
    const schema: JSONSchema7 = {
      type: "number",
    };
    const tree = renderer.create(<Form schema={schema} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("null field", () => {
    const schema: JSONSchema7 = {
      type: "null",
    };
    const tree = renderer.create(<Form schema={schema} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("unsupported field", () => {
    const schema: JSONSchema7 = {
      type: undefined,
    };
    const tree = renderer.create(<Form schema={schema} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
