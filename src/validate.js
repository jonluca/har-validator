"use strict";
exports["afterRequest.json"] = validate0;
const schema0 = {
  $id: "afterRequest.json#",
  $schema: "http://json-schema.org/draft-06/schema#",
  type: "object",
  optional: true,
  required: ["lastAccess", "eTag", "hitCount"],
  properties: {
    expires: {
      type: "string",
      pattern:
        "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?",
    },
    lastAccess: {
      type: "string",
      pattern:
        "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?",
    },
    eTag: { type: "string" },
    hitCount: { type: "integer" },
    comment: { type: "string" },
  },
};
const pattern0 = new RegExp(
  "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?",
  "u",
);

function validate0(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="afterRequest.json#" */ const vErrors = null;
  const errors = 0;
  const _errs0 = errors;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (
        (data.lastAccess === undefined && (missing0 = "lastAccess")) ||
        (data.eTag === undefined && (missing0 = "eTag")) ||
        (data.hitCount === undefined && (missing0 = "hitCount"))
      ) {
        validate0.errors = [
          {
            instancePath,
            schemaPath: "#/required",
            keyword: "required",
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
            schema: schema0.required,
            parentSchema: schema0,
            data,
          },
        ];
        return false;
      } else {
        if (data.expires !== undefined) {
          const data0 = data.expires;
          const _errs1 = errors;
          const _errs2 = errors;
          if (errors === _errs1) {
            if (typeof data0 === "string") {
              if (!pattern0.test(data0)) {
                validate0.errors = [
                  {
                    instancePath: instancePath + "/expires",
                    schemaPath: "#/properties/expires/pattern",
                    keyword: "pattern",
                    params: {
                      pattern:
                        "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?",
                    },
                    message:
                      'must match pattern "' +
                      "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?" +
                      '"',
                    schema:
                      "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?",
                    parentSchema: schema0.properties.expires,
                    data: data0,
                  },
                ];
                return false;
              } else {
              }
            } else {
              validate0.errors = [
                {
                  instancePath: instancePath + "/expires",
                  schemaPath: "#/properties/expires/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                  schema: schema0.properties.expires.type,
                  parentSchema: schema0.properties.expires,
                  data: data0,
                },
              ];
              return false;
            }
            if (errors === _errs1) {
            }
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.lastAccess !== undefined) {
            const data1 = data.lastAccess;
            const _errs3 = errors;
            const _errs4 = errors;
            if (errors === _errs3) {
              if (typeof data1 === "string") {
                if (!pattern0.test(data1)) {
                  validate0.errors = [
                    {
                      instancePath: instancePath + "/lastAccess",
                      schemaPath: "#/properties/lastAccess/pattern",
                      keyword: "pattern",
                      params: {
                        pattern:
                          "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?",
                      },
                      message:
                        'must match pattern "' +
                        "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?" +
                        '"',
                      schema:
                        "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?",
                      parentSchema: schema0.properties.lastAccess,
                      data: data1,
                    },
                  ];
                  return false;
                } else {
                }
              } else {
                validate0.errors = [
                  {
                    instancePath: instancePath + "/lastAccess",
                    schemaPath: "#/properties/lastAccess/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string",
                    schema: schema0.properties.lastAccess.type,
                    parentSchema: schema0.properties.lastAccess,
                    data: data1,
                  },
                ];
                return false;
              }
              if (errors === _errs3) {
              }
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.eTag !== undefined) {
              const data2 = data.eTag;
              const _errs5 = errors;
              if (typeof data2 !== "string") {
                validate0.errors = [
                  {
                    instancePath: instancePath + "/eTag",
                    schemaPath: "#/properties/eTag/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string",
                    schema: schema0.properties.eTag.type,
                    parentSchema: schema0.properties.eTag,
                    data: data2,
                  },
                ];
                return false;
              }
              const _errs6 = errors;
              if (errors === _errs5) {
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.hitCount !== undefined) {
                const data3 = data.hitCount;
                const _errs7 = errors;
                if (!(typeof data3 == "number" && !(data3 % 1) && !isNaN(data3))) {
                  validate0.errors = [
                    {
                      instancePath: instancePath + "/hitCount",
                      schemaPath: "#/properties/hitCount/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer",
                      schema: schema0.properties.hitCount.type,
                      parentSchema: schema0.properties.hitCount,
                      data: data3,
                    },
                  ];
                  return false;
                }
                const _errs8 = errors;
                if (errors === _errs7) {
                }
                var valid0 = _errs7 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.comment !== undefined) {
                  const data4 = data.comment;
                  const _errs9 = errors;
                  if (typeof data4 !== "string") {
                    validate0.errors = [
                      {
                        instancePath: instancePath + "/comment",
                        schemaPath: "#/properties/comment/type",
                        keyword: "type",
                        params: { type: "string" },
                        message: "must be string",
                        schema: schema0.properties.comment.type,
                        parentSchema: schema0.properties.comment,
                        data: data4,
                      },
                    ];
                    return false;
                  }
                  const _errs10 = errors;
                  if (errors === _errs9) {
                  }
                  var valid0 = _errs9 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                }
              }
            }
          }
        }
      }
    } else {
      validate0.errors = [
        {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
          schema: schema0.type,
          parentSchema: schema0,
          data,
        },
      ];
      return false;
    }
    if (errors === 0) {
    }
  }
  validate0.errors = vErrors;
  return errors === 0;
}

exports["beforeRequest.json"] = validate1;
const schema1 = {
  $id: "beforeRequest.json#",
  $schema: "http://json-schema.org/draft-06/schema#",
  type: "object",
  optional: true,
  required: ["lastAccess", "eTag", "hitCount"],
  properties: {
    expires: {
      type: "string",
      pattern:
        "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?",
    },
    lastAccess: {
      type: "string",
      pattern:
        "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?",
    },
    eTag: { type: "string" },
    hitCount: { type: "integer" },
    comment: { type: "string" },
  },
};

function validate1(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="beforeRequest.json#" */ const vErrors = null;
  const errors = 0;
  const _errs0 = errors;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (
        (data.lastAccess === undefined && (missing0 = "lastAccess")) ||
        (data.eTag === undefined && (missing0 = "eTag")) ||
        (data.hitCount === undefined && (missing0 = "hitCount"))
      ) {
        validate1.errors = [
          {
            instancePath,
            schemaPath: "#/required",
            keyword: "required",
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
            schema: schema1.required,
            parentSchema: schema1,
            data,
          },
        ];
        return false;
      } else {
        if (data.expires !== undefined) {
          const data0 = data.expires;
          const _errs1 = errors;
          const _errs2 = errors;
          if (errors === _errs1) {
            if (typeof data0 === "string") {
              if (!pattern0.test(data0)) {
                validate1.errors = [
                  {
                    instancePath: instancePath + "/expires",
                    schemaPath: "#/properties/expires/pattern",
                    keyword: "pattern",
                    params: {
                      pattern:
                        "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?",
                    },
                    message:
                      'must match pattern "' +
                      "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?" +
                      '"',
                    schema:
                      "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?",
                    parentSchema: schema1.properties.expires,
                    data: data0,
                  },
                ];
                return false;
              } else {
              }
            } else {
              validate1.errors = [
                {
                  instancePath: instancePath + "/expires",
                  schemaPath: "#/properties/expires/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                  schema: schema1.properties.expires.type,
                  parentSchema: schema1.properties.expires,
                  data: data0,
                },
              ];
              return false;
            }
            if (errors === _errs1) {
            }
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.lastAccess !== undefined) {
            const data1 = data.lastAccess;
            const _errs3 = errors;
            const _errs4 = errors;
            if (errors === _errs3) {
              if (typeof data1 === "string") {
                if (!pattern0.test(data1)) {
                  validate1.errors = [
                    {
                      instancePath: instancePath + "/lastAccess",
                      schemaPath: "#/properties/lastAccess/pattern",
                      keyword: "pattern",
                      params: {
                        pattern:
                          "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?",
                      },
                      message:
                        'must match pattern "' +
                        "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?" +
                        '"',
                      schema:
                        "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?",
                      parentSchema: schema1.properties.lastAccess,
                      data: data1,
                    },
                  ];
                  return false;
                } else {
                }
              } else {
                validate1.errors = [
                  {
                    instancePath: instancePath + "/lastAccess",
                    schemaPath: "#/properties/lastAccess/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string",
                    schema: schema1.properties.lastAccess.type,
                    parentSchema: schema1.properties.lastAccess,
                    data: data1,
                  },
                ];
                return false;
              }
              if (errors === _errs3) {
              }
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.eTag !== undefined) {
              const data2 = data.eTag;
              const _errs5 = errors;
              if (typeof data2 !== "string") {
                validate1.errors = [
                  {
                    instancePath: instancePath + "/eTag",
                    schemaPath: "#/properties/eTag/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string",
                    schema: schema1.properties.eTag.type,
                    parentSchema: schema1.properties.eTag,
                    data: data2,
                  },
                ];
                return false;
              }
              const _errs6 = errors;
              if (errors === _errs5) {
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.hitCount !== undefined) {
                const data3 = data.hitCount;
                const _errs7 = errors;
                if (!(typeof data3 == "number" && !(data3 % 1) && !isNaN(data3))) {
                  validate1.errors = [
                    {
                      instancePath: instancePath + "/hitCount",
                      schemaPath: "#/properties/hitCount/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer",
                      schema: schema1.properties.hitCount.type,
                      parentSchema: schema1.properties.hitCount,
                      data: data3,
                    },
                  ];
                  return false;
                }
                const _errs8 = errors;
                if (errors === _errs7) {
                }
                var valid0 = _errs7 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.comment !== undefined) {
                  const data4 = data.comment;
                  const _errs9 = errors;
                  if (typeof data4 !== "string") {
                    validate1.errors = [
                      {
                        instancePath: instancePath + "/comment",
                        schemaPath: "#/properties/comment/type",
                        keyword: "type",
                        params: { type: "string" },
                        message: "must be string",
                        schema: schema1.properties.comment.type,
                        parentSchema: schema1.properties.comment,
                        data: data4,
                      },
                    ];
                    return false;
                  }
                  const _errs10 = errors;
                  if (errors === _errs9) {
                  }
                  var valid0 = _errs9 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                }
              }
            }
          }
        }
      }
    } else {
      validate1.errors = [
        {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
          schema: schema1.type,
          parentSchema: schema1,
          data,
        },
      ];
      return false;
    }
    if (errors === 0) {
    }
  }
  validate1.errors = vErrors;
  return errors === 0;
}

exports["browser.json"] = validate2;
const schema2 = {
  $id: "browser.json#",
  $schema: "http://json-schema.org/draft-06/schema#",
  type: "object",
  required: ["name", "version"],
  properties: { name: { type: "string" }, version: { type: "string" }, comment: { type: "string" } },
};

function validate2(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="browser.json#" */ const vErrors = null;
  const errors = 0;
  const _errs0 = errors;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if ((data.name === undefined && (missing0 = "name")) || (data.version === undefined && (missing0 = "version"))) {
        validate2.errors = [
          {
            instancePath,
            schemaPath: "#/required",
            keyword: "required",
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
            schema: schema2.required,
            parentSchema: schema2,
            data,
          },
        ];
        return false;
      } else {
        if (data.name !== undefined) {
          const data0 = data.name;
          const _errs1 = errors;
          if (typeof data0 !== "string") {
            validate2.errors = [
              {
                instancePath: instancePath + "/name",
                schemaPath: "#/properties/name/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
                schema: schema2.properties.name.type,
                parentSchema: schema2.properties.name,
                data: data0,
              },
            ];
            return false;
          }
          const _errs2 = errors;
          if (errors === _errs1) {
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.version !== undefined) {
            const data1 = data.version;
            const _errs3 = errors;
            if (typeof data1 !== "string") {
              validate2.errors = [
                {
                  instancePath: instancePath + "/version",
                  schemaPath: "#/properties/version/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                  schema: schema2.properties.version.type,
                  parentSchema: schema2.properties.version,
                  data: data1,
                },
              ];
              return false;
            }
            const _errs4 = errors;
            if (errors === _errs3) {
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.comment !== undefined) {
              const data2 = data.comment;
              const _errs5 = errors;
              if (typeof data2 !== "string") {
                validate2.errors = [
                  {
                    instancePath: instancePath + "/comment",
                    schemaPath: "#/properties/comment/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string",
                    schema: schema2.properties.comment.type,
                    parentSchema: schema2.properties.comment,
                    data: data2,
                  },
                ];
                return false;
              }
              const _errs6 = errors;
              if (errors === _errs5) {
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
            }
          }
        }
      }
    } else {
      validate2.errors = [
        {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
          schema: schema2.type,
          parentSchema: schema2,
          data,
        },
      ];
      return false;
    }
    if (errors === 0) {
    }
  }
  validate2.errors = vErrors;
  return errors === 0;
}

exports["cache.json"] = validate3;
const schema3 = {
  $id: "cache.json#",
  $schema: "http://json-schema.org/draft-06/schema#",
  properties: {
    beforeRequest: { oneOf: [{ type: "null" }, { $ref: "beforeRequest.json#" }] },
    afterRequest: { oneOf: [{ type: "null" }, { $ref: "afterRequest.json#" }] },
    comment: { type: "string" },
  },
};

function validate3(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="cache.json#" */ let vErrors = null;
  let errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.beforeRequest !== undefined) {
      const data0 = data.beforeRequest;
      const _errs0 = errors;
      const _errs1 = errors;
      let valid1 = false;
      let passing0 = null;
      const _errs2 = errors;
      if (data0 !== null) {
        const err0 = {
          instancePath: instancePath + "/beforeRequest",
          schemaPath: "#/properties/beforeRequest/oneOf/0/type",
          keyword: "type",
          params: { type: "null" },
          message: "must be null",
          schema: schema3.properties.beforeRequest.oneOf[0].type,
          parentSchema: schema3.properties.beforeRequest.oneOf[0],
          data: data0,
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      }
      const _errs3 = errors;
      if (errors === _errs2) {
      }
      var _valid0 = _errs2 === errors;
      if (_valid0) {
        valid1 = true;
        passing0 = 0;
      }
      const _errs4 = errors;
      const _errs5 = errors;
      const _errs6 = errors;
      if (errors === _errs5) {
        if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
          let missing0;
          if (
            (data0.lastAccess === undefined && (missing0 = "lastAccess")) ||
            (data0.eTag === undefined && (missing0 = "eTag")) ||
            (data0.hitCount === undefined && (missing0 = "hitCount"))
          ) {
            const err1 = {
              instancePath: instancePath + "/beforeRequest",
              schemaPath: "beforeRequest.json#/required",
              keyword: "required",
              params: { missingProperty: missing0 },
              message: "must have required property '" + missing0 + "'",
              schema: schema1.required,
              parentSchema: schema1,
              data: data0,
            };
            if (vErrors === null) {
              vErrors = [err1];
            } else {
              vErrors.push(err1);
            }
            errors++;
          } else {
            if (data0.expires !== undefined) {
              const data1 = data0.expires;
              const _errs7 = errors;
              const _errs8 = errors;
              if (errors === _errs7) {
                if (typeof data1 === "string") {
                  if (!pattern0.test(data1)) {
                    const err2 = {
                      instancePath: instancePath + "/beforeRequest/expires",
                      schemaPath: "beforeRequest.json#/properties/expires/pattern",
                      keyword: "pattern",
                      params: {
                        pattern:
                          "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?",
                      },
                      message:
                        'must match pattern "' +
                        "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?" +
                        '"',
                      schema:
                        "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?",
                      parentSchema: schema1.properties.expires,
                      data: data1,
                    };
                    if (vErrors === null) {
                      vErrors = [err2];
                    } else {
                      vErrors.push(err2);
                    }
                    errors++;
                  } else {
                  }
                } else {
                  const err3 = {
                    instancePath: instancePath + "/beforeRequest/expires",
                    schemaPath: "beforeRequest.json#/properties/expires/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string",
                    schema: schema1.properties.expires.type,
                    parentSchema: schema1.properties.expires,
                    data: data1,
                  };
                  if (vErrors === null) {
                    vErrors = [err3];
                  } else {
                    vErrors.push(err3);
                  }
                  errors++;
                }
                if (errors === _errs7) {
                }
              }
              var valid3 = _errs7 === errors;
            } else {
              var valid3 = true;
            }
            if (valid3) {
              if (data0.lastAccess !== undefined) {
                const data2 = data0.lastAccess;
                const _errs9 = errors;
                const _errs10 = errors;
                if (errors === _errs9) {
                  if (typeof data2 === "string") {
                    if (!pattern0.test(data2)) {
                      const err4 = {
                        instancePath: instancePath + "/beforeRequest/lastAccess",
                        schemaPath: "beforeRequest.json#/properties/lastAccess/pattern",
                        keyword: "pattern",
                        params: {
                          pattern:
                            "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?",
                        },
                        message:
                          'must match pattern "' +
                          "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?" +
                          '"',
                        schema:
                          "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?",
                        parentSchema: schema1.properties.lastAccess,
                        data: data2,
                      };
                      if (vErrors === null) {
                        vErrors = [err4];
                      } else {
                        vErrors.push(err4);
                      }
                      errors++;
                    } else {
                    }
                  } else {
                    const err5 = {
                      instancePath: instancePath + "/beforeRequest/lastAccess",
                      schemaPath: "beforeRequest.json#/properties/lastAccess/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string",
                      schema: schema1.properties.lastAccess.type,
                      parentSchema: schema1.properties.lastAccess,
                      data: data2,
                    };
                    if (vErrors === null) {
                      vErrors = [err5];
                    } else {
                      vErrors.push(err5);
                    }
                    errors++;
                  }
                  if (errors === _errs9) {
                  }
                }
                var valid3 = _errs9 === errors;
              } else {
                var valid3 = true;
              }
              if (valid3) {
                if (data0.eTag !== undefined) {
                  const data3 = data0.eTag;
                  const _errs11 = errors;
                  if (typeof data3 !== "string") {
                    const err6 = {
                      instancePath: instancePath + "/beforeRequest/eTag",
                      schemaPath: "beforeRequest.json#/properties/eTag/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string",
                      schema: schema1.properties.eTag.type,
                      parentSchema: schema1.properties.eTag,
                      data: data3,
                    };
                    if (vErrors === null) {
                      vErrors = [err6];
                    } else {
                      vErrors.push(err6);
                    }
                    errors++;
                  }
                  const _errs12 = errors;
                  if (errors === _errs11) {
                  }
                  var valid3 = _errs11 === errors;
                } else {
                  var valid3 = true;
                }
                if (valid3) {
                  if (data0.hitCount !== undefined) {
                    const data4 = data0.hitCount;
                    const _errs13 = errors;
                    if (!(typeof data4 == "number" && !(data4 % 1) && !isNaN(data4))) {
                      const err7 = {
                        instancePath: instancePath + "/beforeRequest/hitCount",
                        schemaPath: "beforeRequest.json#/properties/hitCount/type",
                        keyword: "type",
                        params: { type: "integer" },
                        message: "must be integer",
                        schema: schema1.properties.hitCount.type,
                        parentSchema: schema1.properties.hitCount,
                        data: data4,
                      };
                      if (vErrors === null) {
                        vErrors = [err7];
                      } else {
                        vErrors.push(err7);
                      }
                      errors++;
                    }
                    const _errs14 = errors;
                    if (errors === _errs13) {
                    }
                    var valid3 = _errs13 === errors;
                  } else {
                    var valid3 = true;
                  }
                  if (valid3) {
                    if (data0.comment !== undefined) {
                      const data5 = data0.comment;
                      const _errs15 = errors;
                      if (typeof data5 !== "string") {
                        const err8 = {
                          instancePath: instancePath + "/beforeRequest/comment",
                          schemaPath: "beforeRequest.json#/properties/comment/type",
                          keyword: "type",
                          params: { type: "string" },
                          message: "must be string",
                          schema: schema1.properties.comment.type,
                          parentSchema: schema1.properties.comment,
                          data: data5,
                        };
                        if (vErrors === null) {
                          vErrors = [err8];
                        } else {
                          vErrors.push(err8);
                        }
                        errors++;
                      }
                      const _errs16 = errors;
                      if (errors === _errs15) {
                      }
                      var valid3 = _errs15 === errors;
                    } else {
                      var valid3 = true;
                    }
                    if (valid3) {
                    }
                  }
                }
              }
            }
          }
        } else {
          const err9 = {
            instancePath: instancePath + "/beforeRequest",
            schemaPath: "beforeRequest.json#/type",
            keyword: "type",
            params: { type: "object" },
            message: "must be object",
            schema: schema1.type,
            parentSchema: schema1,
            data: data0,
          };
          if (vErrors === null) {
            vErrors = [err9];
          } else {
            vErrors.push(err9);
          }
          errors++;
        }
        if (errors === _errs5) {
        }
      }
      var valid2 = _errs5 === errors;
      if (valid2) {
      }
      var _valid0 = _errs4 === errors;
      if (_valid0 && valid1) {
        valid1 = false;
        passing0 = [passing0, 1];
      } else {
        if (_valid0) {
          valid1 = true;
          passing0 = 1;
        }
      }
      if (!valid1) {
        const err10 = {
          instancePath: instancePath + "/beforeRequest",
          schemaPath: "#/properties/beforeRequest/oneOf",
          keyword: "oneOf",
          params: { passingSchemas: passing0 },
          message: "must match exactly one schema in oneOf",
          schema: schema3.properties.beforeRequest.oneOf,
          parentSchema: schema3.properties.beforeRequest,
          data: data0,
        };
        if (vErrors === null) {
          vErrors = [err10];
        } else {
          vErrors.push(err10);
        }
        errors++;
        validate3.errors = vErrors;
        return false;
      } else {
        errors = _errs1;
        if (vErrors !== null) {
          if (_errs1) {
            vErrors.length = _errs1;
          } else {
            vErrors = null;
          }
        }
      }
      if (errors === _errs0) {
      }
      var valid0 = _errs0 === errors;
    } else {
      var valid0 = true;
    }
    if (valid0) {
      if (data.afterRequest !== undefined) {
        const data6 = data.afterRequest;
        const _errs17 = errors;
        const _errs18 = errors;
        let valid4 = false;
        let passing1 = null;
        const _errs19 = errors;
        if (data6 !== null) {
          const err11 = {
            instancePath: instancePath + "/afterRequest",
            schemaPath: "#/properties/afterRequest/oneOf/0/type",
            keyword: "type",
            params: { type: "null" },
            message: "must be null",
            schema: schema3.properties.afterRequest.oneOf[0].type,
            parentSchema: schema3.properties.afterRequest.oneOf[0],
            data: data6,
          };
          if (vErrors === null) {
            vErrors = [err11];
          } else {
            vErrors.push(err11);
          }
          errors++;
        }
        const _errs20 = errors;
        if (errors === _errs19) {
        }
        var _valid1 = _errs19 === errors;
        if (_valid1) {
          valid4 = true;
          passing1 = 0;
        }
        const _errs21 = errors;
        const _errs22 = errors;
        const _errs23 = errors;
        if (errors === _errs22) {
          if (data6 && typeof data6 == "object" && !Array.isArray(data6)) {
            let missing1;
            if (
              (data6.lastAccess === undefined && (missing1 = "lastAccess")) ||
              (data6.eTag === undefined && (missing1 = "eTag")) ||
              (data6.hitCount === undefined && (missing1 = "hitCount"))
            ) {
              const err12 = {
                instancePath: instancePath + "/afterRequest",
                schemaPath: "afterRequest.json#/required",
                keyword: "required",
                params: { missingProperty: missing1 },
                message: "must have required property '" + missing1 + "'",
                schema: schema0.required,
                parentSchema: schema0,
                data: data6,
              };
              if (vErrors === null) {
                vErrors = [err12];
              } else {
                vErrors.push(err12);
              }
              errors++;
            } else {
              if (data6.expires !== undefined) {
                const data7 = data6.expires;
                const _errs24 = errors;
                const _errs25 = errors;
                if (errors === _errs24) {
                  if (typeof data7 === "string") {
                    if (!pattern0.test(data7)) {
                      const err13 = {
                        instancePath: instancePath + "/afterRequest/expires",
                        schemaPath: "afterRequest.json#/properties/expires/pattern",
                        keyword: "pattern",
                        params: {
                          pattern:
                            "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?",
                        },
                        message:
                          'must match pattern "' +
                          "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?" +
                          '"',
                        schema:
                          "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?",
                        parentSchema: schema0.properties.expires,
                        data: data7,
                      };
                      if (vErrors === null) {
                        vErrors = [err13];
                      } else {
                        vErrors.push(err13);
                      }
                      errors++;
                    } else {
                    }
                  } else {
                    const err14 = {
                      instancePath: instancePath + "/afterRequest/expires",
                      schemaPath: "afterRequest.json#/properties/expires/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string",
                      schema: schema0.properties.expires.type,
                      parentSchema: schema0.properties.expires,
                      data: data7,
                    };
                    if (vErrors === null) {
                      vErrors = [err14];
                    } else {
                      vErrors.push(err14);
                    }
                    errors++;
                  }
                  if (errors === _errs24) {
                  }
                }
                var valid6 = _errs24 === errors;
              } else {
                var valid6 = true;
              }
              if (valid6) {
                if (data6.lastAccess !== undefined) {
                  const data8 = data6.lastAccess;
                  const _errs26 = errors;
                  const _errs27 = errors;
                  if (errors === _errs26) {
                    if (typeof data8 === "string") {
                      if (!pattern0.test(data8)) {
                        const err15 = {
                          instancePath: instancePath + "/afterRequest/lastAccess",
                          schemaPath: "afterRequest.json#/properties/lastAccess/pattern",
                          keyword: "pattern",
                          params: {
                            pattern:
                              "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?",
                          },
                          message:
                            'must match pattern "' +
                            "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?" +
                            '"',
                          schema:
                            "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))?",
                          parentSchema: schema0.properties.lastAccess,
                          data: data8,
                        };
                        if (vErrors === null) {
                          vErrors = [err15];
                        } else {
                          vErrors.push(err15);
                        }
                        errors++;
                      } else {
                      }
                    } else {
                      const err16 = {
                        instancePath: instancePath + "/afterRequest/lastAccess",
                        schemaPath: "afterRequest.json#/properties/lastAccess/type",
                        keyword: "type",
                        params: { type: "string" },
                        message: "must be string",
                        schema: schema0.properties.lastAccess.type,
                        parentSchema: schema0.properties.lastAccess,
                        data: data8,
                      };
                      if (vErrors === null) {
                        vErrors = [err16];
                      } else {
                        vErrors.push(err16);
                      }
                      errors++;
                    }
                    if (errors === _errs26) {
                    }
                  }
                  var valid6 = _errs26 === errors;
                } else {
                  var valid6 = true;
                }
                if (valid6) {
                  if (data6.eTag !== undefined) {
                    const data9 = data6.eTag;
                    const _errs28 = errors;
                    if (typeof data9 !== "string") {
                      const err17 = {
                        instancePath: instancePath + "/afterRequest/eTag",
                        schemaPath: "afterRequest.json#/properties/eTag/type",
                        keyword: "type",
                        params: { type: "string" },
                        message: "must be string",
                        schema: schema0.properties.eTag.type,
                        parentSchema: schema0.properties.eTag,
                        data: data9,
                      };
                      if (vErrors === null) {
                        vErrors = [err17];
                      } else {
                        vErrors.push(err17);
                      }
                      errors++;
                    }
                    const _errs29 = errors;
                    if (errors === _errs28) {
                    }
                    var valid6 = _errs28 === errors;
                  } else {
                    var valid6 = true;
                  }
                  if (valid6) {
                    if (data6.hitCount !== undefined) {
                      const data10 = data6.hitCount;
                      const _errs30 = errors;
                      if (!(typeof data10 == "number" && !(data10 % 1) && !isNaN(data10))) {
                        const err18 = {
                          instancePath: instancePath + "/afterRequest/hitCount",
                          schemaPath: "afterRequest.json#/properties/hitCount/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer",
                          schema: schema0.properties.hitCount.type,
                          parentSchema: schema0.properties.hitCount,
                          data: data10,
                        };
                        if (vErrors === null) {
                          vErrors = [err18];
                        } else {
                          vErrors.push(err18);
                        }
                        errors++;
                      }
                      const _errs31 = errors;
                      if (errors === _errs30) {
                      }
                      var valid6 = _errs30 === errors;
                    } else {
                      var valid6 = true;
                    }
                    if (valid6) {
                      if (data6.comment !== undefined) {
                        const data11 = data6.comment;
                        const _errs32 = errors;
                        if (typeof data11 !== "string") {
                          const err19 = {
                            instancePath: instancePath + "/afterRequest/comment",
                            schemaPath: "afterRequest.json#/properties/comment/type",
                            keyword: "type",
                            params: { type: "string" },
                            message: "must be string",
                            schema: schema0.properties.comment.type,
                            parentSchema: schema0.properties.comment,
                            data: data11,
                          };
                          if (vErrors === null) {
                            vErrors = [err19];
                          } else {
                            vErrors.push(err19);
                          }
                          errors++;
                        }
                        const _errs33 = errors;
                        if (errors === _errs32) {
                        }
                        var valid6 = _errs32 === errors;
                      } else {
                        var valid6 = true;
                      }
                      if (valid6) {
                      }
                    }
                  }
                }
              }
            }
          } else {
            const err20 = {
              instancePath: instancePath + "/afterRequest",
              schemaPath: "afterRequest.json#/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
              schema: schema0.type,
              parentSchema: schema0,
              data: data6,
            };
            if (vErrors === null) {
              vErrors = [err20];
            } else {
              vErrors.push(err20);
            }
            errors++;
          }
          if (errors === _errs22) {
          }
        }
        var valid5 = _errs22 === errors;
        if (valid5) {
        }
        var _valid1 = _errs21 === errors;
        if (_valid1 && valid4) {
          valid4 = false;
          passing1 = [passing1, 1];
        } else {
          if (_valid1) {
            valid4 = true;
            passing1 = 1;
          }
        }
        if (!valid4) {
          const err21 = {
            instancePath: instancePath + "/afterRequest",
            schemaPath: "#/properties/afterRequest/oneOf",
            keyword: "oneOf",
            params: { passingSchemas: passing1 },
            message: "must match exactly one schema in oneOf",
            schema: schema3.properties.afterRequest.oneOf,
            parentSchema: schema3.properties.afterRequest,
            data: data6,
          };
          if (vErrors === null) {
            vErrors = [err21];
          } else {
            vErrors.push(err21);
          }
          errors++;
          validate3.errors = vErrors;
          return false;
        } else {
          errors = _errs18;
          if (vErrors !== null) {
            if (_errs18) {
              vErrors.length = _errs18;
            } else {
              vErrors = null;
            }
          }
        }
        if (errors === _errs17) {
        }
        var valid0 = _errs17 === errors;
      } else {
        var valid0 = true;
      }
      if (valid0) {
        if (data.comment !== undefined) {
          const data12 = data.comment;
          const _errs34 = errors;
          if (typeof data12 !== "string") {
            validate3.errors = [
              {
                instancePath: instancePath + "/comment",
                schemaPath: "#/properties/comment/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
                schema: schema3.properties.comment.type,
                parentSchema: schema3.properties.comment,
                data: data12,
              },
            ];
            return false;
          }
          const _errs35 = errors;
          if (errors === _errs34) {
          }
          var valid0 = _errs34 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
        }
      }
    }
  }
  if (errors === 0) {
  }
  validate3.errors = vErrors;
  return errors === 0;
}

exports["content.json"] = validate4;
const schema6 = {
  $id: "content.json#",
  $schema: "http://json-schema.org/draft-06/schema#",
  type: "object",
  required: ["size", "mimeType"],
  properties: {
    size: { type: "integer" },
    compression: { type: "integer" },
    mimeType: { type: "string" },
    text: { type: "string" },
    encoding: { type: "string" },
    comment: { type: "string" },
  },
};

function validate4(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="content.json#" */ const vErrors = null;
  const errors = 0;
  const _errs0 = errors;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (
        (data.size === undefined && (missing0 = "size")) ||
        (data.mimeType === undefined && (missing0 = "mimeType"))
      ) {
        validate4.errors = [
          {
            instancePath,
            schemaPath: "#/required",
            keyword: "required",
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
            schema: schema6.required,
            parentSchema: schema6,
            data,
          },
        ];
        return false;
      } else {
        if (data.size !== undefined) {
          const data0 = data.size;
          const _errs1 = errors;
          if (!(typeof data0 == "number" && !(data0 % 1) && !isNaN(data0))) {
            validate4.errors = [
              {
                instancePath: instancePath + "/size",
                schemaPath: "#/properties/size/type",
                keyword: "type",
                params: { type: "integer" },
                message: "must be integer",
                schema: schema6.properties.size.type,
                parentSchema: schema6.properties.size,
                data: data0,
              },
            ];
            return false;
          }
          const _errs2 = errors;
          if (errors === _errs1) {
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.compression !== undefined) {
            const data1 = data.compression;
            const _errs3 = errors;
            if (!(typeof data1 == "number" && !(data1 % 1) && !isNaN(data1))) {
              validate4.errors = [
                {
                  instancePath: instancePath + "/compression",
                  schemaPath: "#/properties/compression/type",
                  keyword: "type",
                  params: { type: "integer" },
                  message: "must be integer",
                  schema: schema6.properties.compression.type,
                  parentSchema: schema6.properties.compression,
                  data: data1,
                },
              ];
              return false;
            }
            const _errs4 = errors;
            if (errors === _errs3) {
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.mimeType !== undefined) {
              const data2 = data.mimeType;
              const _errs5 = errors;
              if (typeof data2 !== "string") {
                validate4.errors = [
                  {
                    instancePath: instancePath + "/mimeType",
                    schemaPath: "#/properties/mimeType/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string",
                    schema: schema6.properties.mimeType.type,
                    parentSchema: schema6.properties.mimeType,
                    data: data2,
                  },
                ];
                return false;
              }
              const _errs6 = errors;
              if (errors === _errs5) {
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.text !== undefined) {
                const data3 = data.text;
                const _errs7 = errors;
                if (typeof data3 !== "string") {
                  validate4.errors = [
                    {
                      instancePath: instancePath + "/text",
                      schemaPath: "#/properties/text/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string",
                      schema: schema6.properties.text.type,
                      parentSchema: schema6.properties.text,
                      data: data3,
                    },
                  ];
                  return false;
                }
                const _errs8 = errors;
                if (errors === _errs7) {
                }
                var valid0 = _errs7 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.encoding !== undefined) {
                  const data4 = data.encoding;
                  const _errs9 = errors;
                  if (typeof data4 !== "string") {
                    validate4.errors = [
                      {
                        instancePath: instancePath + "/encoding",
                        schemaPath: "#/properties/encoding/type",
                        keyword: "type",
                        params: { type: "string" },
                        message: "must be string",
                        schema: schema6.properties.encoding.type,
                        parentSchema: schema6.properties.encoding,
                        data: data4,
                      },
                    ];
                    return false;
                  }
                  const _errs10 = errors;
                  if (errors === _errs9) {
                  }
                  var valid0 = _errs9 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.comment !== undefined) {
                    const data5 = data.comment;
                    const _errs11 = errors;
                    if (typeof data5 !== "string") {
                      validate4.errors = [
                        {
                          instancePath: instancePath + "/comment",
                          schemaPath: "#/properties/comment/type",
                          keyword: "type",
                          params: { type: "string" },
                          message: "must be string",
                          schema: schema6.properties.comment.type,
                          parentSchema: schema6.properties.comment,
                          data: data5,
                        },
                      ];
                      return false;
                    }
                    const _errs12 = errors;
                    if (errors === _errs11) {
                    }
                    var valid0 = _errs11 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate4.errors = [
        {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
          schema: schema6.type,
          parentSchema: schema6,
          data,
        },
      ];
      return false;
    }
    if (errors === 0) {
    }
  }
  validate4.errors = vErrors;
  return errors === 0;
}

exports["cookie.json"] = validate5;
const schema7 = {
  $id: "cookie.json#",
  $schema: "http://json-schema.org/draft-06/schema#",
  type: "object",
  required: ["name", "value"],
  properties: {
    name: { type: "string" },
    value: { type: "string" },
    path: { type: "string" },
    domain: { type: "string" },
    expires: { type: ["string", "null"], format: "date-time" },
    httpOnly: { type: "boolean" },
    secure: { type: "boolean" },
    comment: { type: "string" },
  },
};
const formats0 = require("ajv-formats/dist/formats").fullFormats["date-time"];

function validate5(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="cookie.json#" */ const vErrors = null;
  const errors = 0;
  const _errs0 = errors;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if ((data.name === undefined && (missing0 = "name")) || (data.value === undefined && (missing0 = "value"))) {
        validate5.errors = [
          {
            instancePath,
            schemaPath: "#/required",
            keyword: "required",
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
            schema: schema7.required,
            parentSchema: schema7,
            data,
          },
        ];
        return false;
      } else {
        if (data.name !== undefined) {
          const data0 = data.name;
          const _errs1 = errors;
          if (typeof data0 !== "string") {
            validate5.errors = [
              {
                instancePath: instancePath + "/name",
                schemaPath: "#/properties/name/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
                schema: schema7.properties.name.type,
                parentSchema: schema7.properties.name,
                data: data0,
              },
            ];
            return false;
          }
          const _errs2 = errors;
          if (errors === _errs1) {
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.value !== undefined) {
            const data1 = data.value;
            const _errs3 = errors;
            if (typeof data1 !== "string") {
              validate5.errors = [
                {
                  instancePath: instancePath + "/value",
                  schemaPath: "#/properties/value/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                  schema: schema7.properties.value.type,
                  parentSchema: schema7.properties.value,
                  data: data1,
                },
              ];
              return false;
            }
            const _errs4 = errors;
            if (errors === _errs3) {
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.path !== undefined) {
              const data2 = data.path;
              const _errs5 = errors;
              if (typeof data2 !== "string") {
                validate5.errors = [
                  {
                    instancePath: instancePath + "/path",
                    schemaPath: "#/properties/path/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string",
                    schema: schema7.properties.path.type,
                    parentSchema: schema7.properties.path,
                    data: data2,
                  },
                ];
                return false;
              }
              const _errs6 = errors;
              if (errors === _errs5) {
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.domain !== undefined) {
                const data3 = data.domain;
                const _errs7 = errors;
                if (typeof data3 !== "string") {
                  validate5.errors = [
                    {
                      instancePath: instancePath + "/domain",
                      schemaPath: "#/properties/domain/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string",
                      schema: schema7.properties.domain.type,
                      parentSchema: schema7.properties.domain,
                      data: data3,
                    },
                  ];
                  return false;
                }
                const _errs8 = errors;
                if (errors === _errs7) {
                }
                var valid0 = _errs7 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.expires !== undefined) {
                  const data4 = data.expires;
                  const _errs9 = errors;
                  if (typeof data4 !== "string" && data4 !== null) {
                    validate5.errors = [
                      {
                        instancePath: instancePath + "/expires",
                        schemaPath: "#/properties/expires/type",
                        keyword: "type",
                        params: { type: schema7.properties.expires.type },
                        message: "must be string,null",
                        schema: schema7.properties.expires.type,
                        parentSchema: schema7.properties.expires,
                        data: data4,
                      },
                    ];
                    return false;
                  }
                  const _errs10 = errors;
                  if (errors === _errs9) {
                    if (typeof data4 == "number") {
                    }
                    if (errors === _errs9) {
                      if (typeof data4 === "string") {
                        if (!formats0.validate(data4)) {
                          validate5.errors = [
                            {
                              instancePath: instancePath + "/expires",
                              schemaPath: "#/properties/expires/format",
                              keyword: "format",
                              params: { format: "date-time" },
                              message: 'must match format "' + "date-time" + '"',
                              schema: "date-time",
                              parentSchema: schema7.properties.expires,
                              data: data4,
                            },
                          ];
                          return false;
                        } else {
                        }
                      }
                      if (errors === _errs9) {
                      }
                    }
                  }
                  var valid0 = _errs9 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.httpOnly !== undefined) {
                    const data5 = data.httpOnly;
                    const _errs11 = errors;
                    if (typeof data5 !== "boolean") {
                      validate5.errors = [
                        {
                          instancePath: instancePath + "/httpOnly",
                          schemaPath: "#/properties/httpOnly/type",
                          keyword: "type",
                          params: { type: "boolean" },
                          message: "must be boolean",
                          schema: schema7.properties.httpOnly.type,
                          parentSchema: schema7.properties.httpOnly,
                          data: data5,
                        },
                      ];
                      return false;
                    }
                    const _errs12 = errors;
                    if (errors === _errs11) {
                    }
                    var valid0 = _errs11 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.secure !== undefined) {
                      const data6 = data.secure;
                      const _errs13 = errors;
                      if (typeof data6 !== "boolean") {
                        validate5.errors = [
                          {
                            instancePath: instancePath + "/secure",
                            schemaPath: "#/properties/secure/type",
                            keyword: "type",
                            params: { type: "boolean" },
                            message: "must be boolean",
                            schema: schema7.properties.secure.type,
                            parentSchema: schema7.properties.secure,
                            data: data6,
                          },
                        ];
                        return false;
                      }
                      const _errs14 = errors;
                      if (errors === _errs13) {
                      }
                      var valid0 = _errs13 === errors;
                    } else {
                      var valid0 = true;
                    }
                    if (valid0) {
                      if (data.comment !== undefined) {
                        const data7 = data.comment;
                        const _errs15 = errors;
                        if (typeof data7 !== "string") {
                          validate5.errors = [
                            {
                              instancePath: instancePath + "/comment",
                              schemaPath: "#/properties/comment/type",
                              keyword: "type",
                              params: { type: "string" },
                              message: "must be string",
                              schema: schema7.properties.comment.type,
                              parentSchema: schema7.properties.comment,
                              data: data7,
                            },
                          ];
                          return false;
                        }
                        const _errs16 = errors;
                        if (errors === _errs15) {
                        }
                        var valid0 = _errs15 === errors;
                      } else {
                        var valid0 = true;
                      }
                      if (valid0) {
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate5.errors = [
        {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
          schema: schema7.type,
          parentSchema: schema7,
          data,
        },
      ];
      return false;
    }
    if (errors === 0) {
    }
  }
  validate5.errors = vErrors;
  return errors === 0;
}

exports["creator.json"] = validate6;
const schema8 = {
  $id: "creator.json#",
  $schema: "http://json-schema.org/draft-06/schema#",
  type: "object",
  required: ["name", "version"],
  properties: { name: { type: "string" }, version: { type: "string" }, comment: { type: "string" } },
};

function validate6(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="creator.json#" */ const vErrors = null;
  const errors = 0;
  const _errs0 = errors;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if ((data.name === undefined && (missing0 = "name")) || (data.version === undefined && (missing0 = "version"))) {
        validate6.errors = [
          {
            instancePath,
            schemaPath: "#/required",
            keyword: "required",
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
            schema: schema8.required,
            parentSchema: schema8,
            data,
          },
        ];
        return false;
      } else {
        if (data.name !== undefined) {
          const data0 = data.name;
          const _errs1 = errors;
          if (typeof data0 !== "string") {
            validate6.errors = [
              {
                instancePath: instancePath + "/name",
                schemaPath: "#/properties/name/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
                schema: schema8.properties.name.type,
                parentSchema: schema8.properties.name,
                data: data0,
              },
            ];
            return false;
          }
          const _errs2 = errors;
          if (errors === _errs1) {
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.version !== undefined) {
            const data1 = data.version;
            const _errs3 = errors;
            if (typeof data1 !== "string") {
              validate6.errors = [
                {
                  instancePath: instancePath + "/version",
                  schemaPath: "#/properties/version/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                  schema: schema8.properties.version.type,
                  parentSchema: schema8.properties.version,
                  data: data1,
                },
              ];
              return false;
            }
            const _errs4 = errors;
            if (errors === _errs3) {
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.comment !== undefined) {
              const data2 = data.comment;
              const _errs5 = errors;
              if (typeof data2 !== "string") {
                validate6.errors = [
                  {
                    instancePath: instancePath + "/comment",
                    schemaPath: "#/properties/comment/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string",
                    schema: schema8.properties.comment.type,
                    parentSchema: schema8.properties.comment,
                    data: data2,
                  },
                ];
                return false;
              }
              const _errs6 = errors;
              if (errors === _errs5) {
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
            }
          }
        }
      }
    } else {
      validate6.errors = [
        {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
          schema: schema8.type,
          parentSchema: schema8,
          data,
        },
      ];
      return false;
    }
    if (errors === 0) {
    }
  }
  validate6.errors = vErrors;
  return errors === 0;
}

exports["entry.json"] = validate7;
const schema9 = {
  $id: "entry.json#",
  $schema: "http://json-schema.org/draft-06/schema#",
  type: "object",
  optional: true,
  required: ["startedDateTime", "time", "request", "response", "cache", "timings"],
  properties: {
    pageref: { type: "string" },
    startedDateTime: {
      type: "string",
      format: "date-time",
      pattern:
        "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))",
    },
    time: { type: "number", min: 0 },
    request: { $ref: "request.json#" },
    response: { $ref: "response.json#" },
    cache: { $ref: "cache.json#" },
    timings: { $ref: "timings.json#" },
    serverIPAddress: { type: "string", oneOf: [{ format: "ipv4" }, { format: "ipv6" }] },
    connection: { type: "string" },
    comment: { type: "string" },
  },
};
const schema19 = {
  $id: "timings.json#",
  $schema: "http://json-schema.org/draft-06/schema#",
  required: ["send", "wait", "receive"],
  properties: {
    dns: { type: "number", min: -1 },
    connect: { type: "number", min: -1 },
    blocked: { type: "number", min: -1 },
    send: { type: "number", min: -1 },
    wait: { type: "number", min: -1 },
    receive: { type: "number", min: -1 },
    ssl: { type: "number", min: -1 },
    comment: { type: "string" },
  },
};
const formats10 = /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
const formats12 =
  /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i;
const pattern8 = new RegExp(
  "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))",
  "u",
);
const schema10 = {
  $id: "request.json#",
  $schema: "http://json-schema.org/draft-06/schema#",
  type: "object",
  required: ["method", "url", "httpVersion", "cookies", "headers", "queryString", "headersSize", "bodySize"],
  properties: {
    method: { type: "string" },
    url: { type: "string", format: "uri" },
    httpVersion: { type: "string" },
    cookies: { type: "array", items: { $ref: "cookie.json#" } },
    headers: { type: "array", items: { $ref: "header.json#" } },
    queryString: { type: "array", items: { $ref: "query.json#" } },
    postData: { $ref: "postData.json#" },
    headersSize: { type: "integer" },
    bodySize: { type: "integer" },
    comment: { type: "string" },
  },
};
const schema12 = {
  $id: "header.json#",
  $schema: "http://json-schema.org/draft-06/schema#",
  type: "object",
  required: ["name", "value"],
  properties: { name: { type: "string" }, value: { type: "string" }, comment: { type: "string" } },
};
const schema13 = {
  $id: "query.json#",
  $schema: "http://json-schema.org/draft-06/schema#",
  type: "object",
  required: ["name", "value"],
  properties: { name: { type: "string" }, value: { type: "string" }, comment: { type: "string" } },
};
const schema14 = {
  $id: "postData.json#",
  $schema: "http://json-schema.org/draft-06/schema#",
  type: "object",
  optional: true,
  required: ["mimeType"],
  properties: {
    mimeType: { type: "string" },
    text: { type: "string" },
    params: {
      type: "array",
      required: ["name"],
      properties: {
        name: { type: "string" },
        value: { type: "string" },
        fileName: { type: "string" },
        contentType: { type: "string" },
        comment: { type: "string" },
      },
    },
    comment: { type: "string" },
  },
};
const formats4 = require("ajv-formats/dist/formats").fullFormats.uri;

function validate8(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="request.json#" */ const vErrors = null;
  const errors = 0;
  const _errs0 = errors;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (
        (data.method === undefined && (missing0 = "method")) ||
        (data.url === undefined && (missing0 = "url")) ||
        (data.httpVersion === undefined && (missing0 = "httpVersion")) ||
        (data.cookies === undefined && (missing0 = "cookies")) ||
        (data.headers === undefined && (missing0 = "headers")) ||
        (data.queryString === undefined && (missing0 = "queryString")) ||
        (data.headersSize === undefined && (missing0 = "headersSize")) ||
        (data.bodySize === undefined && (missing0 = "bodySize"))
      ) {
        validate8.errors = [
          {
            instancePath,
            schemaPath: "#/required",
            keyword: "required",
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
            schema: schema10.required,
            parentSchema: schema10,
            data,
          },
        ];
        return false;
      } else {
        if (data.method !== undefined) {
          const data0 = data.method;
          const _errs1 = errors;
          if (typeof data0 !== "string") {
            validate8.errors = [
              {
                instancePath: instancePath + "/method",
                schemaPath: "#/properties/method/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
                schema: schema10.properties.method.type,
                parentSchema: schema10.properties.method,
                data: data0,
              },
            ];
            return false;
          }
          const _errs2 = errors;
          if (errors === _errs1) {
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.url !== undefined) {
            const data1 = data.url;
            const _errs3 = errors;
            const _errs4 = errors;
            if (errors === _errs3) {
              if (typeof data1 == "number") {
              }
              if (errors === _errs3) {
                if (typeof data1 === "string") {
                  if (!formats4(data1)) {
                    validate8.errors = [
                      {
                        instancePath: instancePath + "/url",
                        schemaPath: "#/properties/url/format",
                        keyword: "format",
                        params: { format: "uri" },
                        message: 'must match format "' + "uri" + '"',
                        schema: "uri",
                        parentSchema: schema10.properties.url,
                        data: data1,
                      },
                    ];
                    return false;
                  } else {
                  }
                } else {
                  validate8.errors = [
                    {
                      instancePath: instancePath + "/url",
                      schemaPath: "#/properties/url/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string",
                      schema: schema10.properties.url.type,
                      parentSchema: schema10.properties.url,
                      data: data1,
                    },
                  ];
                  return false;
                }
                if (errors === _errs3) {
                }
              }
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.httpVersion !== undefined) {
              const data2 = data.httpVersion;
              const _errs5 = errors;
              if (typeof data2 !== "string") {
                validate8.errors = [
                  {
                    instancePath: instancePath + "/httpVersion",
                    schemaPath: "#/properties/httpVersion/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string",
                    schema: schema10.properties.httpVersion.type,
                    parentSchema: schema10.properties.httpVersion,
                    data: data2,
                  },
                ];
                return false;
              }
              const _errs6 = errors;
              if (errors === _errs5) {
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.cookies !== undefined) {
                const data3 = data.cookies;
                const _errs7 = errors;
                const _errs8 = errors;
                if (errors === _errs7) {
                  if (Array.isArray(data3)) {
                    var valid1 = true;
                    const len0 = data3.length;
                    for (let i0 = 0; i0 < len0; i0++) {
                      const data4 = data3[i0];
                      const _errs9 = errors;
                      const _errs10 = errors;
                      const _errs11 = errors;
                      if (errors === _errs10) {
                        if (data4 && typeof data4 == "object" && !Array.isArray(data4)) {
                          let missing1;
                          if (
                            (data4.name === undefined && (missing1 = "name")) ||
                            (data4.value === undefined && (missing1 = "value"))
                          ) {
                            validate8.errors = [
                              {
                                instancePath: instancePath + "/cookies/" + i0,
                                schemaPath: "cookie.json#/required",
                                keyword: "required",
                                params: { missingProperty: missing1 },
                                message: "must have required property '" + missing1 + "'",
                                schema: schema7.required,
                                parentSchema: schema7,
                                data: data4,
                              },
                            ];
                            return false;
                          } else {
                            if (data4.name !== undefined) {
                              const data5 = data4.name;
                              const _errs12 = errors;
                              if (typeof data5 !== "string") {
                                validate8.errors = [
                                  {
                                    instancePath: instancePath + "/cookies/" + i0 + "/name",
                                    schemaPath: "cookie.json#/properties/name/type",
                                    keyword: "type",
                                    params: { type: "string" },
                                    message: "must be string",
                                    schema: schema7.properties.name.type,
                                    parentSchema: schema7.properties.name,
                                    data: data5,
                                  },
                                ];
                                return false;
                              }
                              const _errs13 = errors;
                              if (errors === _errs12) {
                              }
                              var valid3 = _errs12 === errors;
                            } else {
                              var valid3 = true;
                            }
                            if (valid3) {
                              if (data4.value !== undefined) {
                                const data6 = data4.value;
                                const _errs14 = errors;
                                if (typeof data6 !== "string") {
                                  validate8.errors = [
                                    {
                                      instancePath: instancePath + "/cookies/" + i0 + "/value",
                                      schemaPath: "cookie.json#/properties/value/type",
                                      keyword: "type",
                                      params: { type: "string" },
                                      message: "must be string",
                                      schema: schema7.properties.value.type,
                                      parentSchema: schema7.properties.value,
                                      data: data6,
                                    },
                                  ];
                                  return false;
                                }
                                const _errs15 = errors;
                                if (errors === _errs14) {
                                }
                                var valid3 = _errs14 === errors;
                              } else {
                                var valid3 = true;
                              }
                              if (valid3) {
                                if (data4.path !== undefined) {
                                  const data7 = data4.path;
                                  const _errs16 = errors;
                                  if (typeof data7 !== "string") {
                                    validate8.errors = [
                                      {
                                        instancePath: instancePath + "/cookies/" + i0 + "/path",
                                        schemaPath: "cookie.json#/properties/path/type",
                                        keyword: "type",
                                        params: { type: "string" },
                                        message: "must be string",
                                        schema: schema7.properties.path.type,
                                        parentSchema: schema7.properties.path,
                                        data: data7,
                                      },
                                    ];
                                    return false;
                                  }
                                  const _errs17 = errors;
                                  if (errors === _errs16) {
                                  }
                                  var valid3 = _errs16 === errors;
                                } else {
                                  var valid3 = true;
                                }
                                if (valid3) {
                                  if (data4.domain !== undefined) {
                                    const data8 = data4.domain;
                                    const _errs18 = errors;
                                    if (typeof data8 !== "string") {
                                      validate8.errors = [
                                        {
                                          instancePath: instancePath + "/cookies/" + i0 + "/domain",
                                          schemaPath: "cookie.json#/properties/domain/type",
                                          keyword: "type",
                                          params: { type: "string" },
                                          message: "must be string",
                                          schema: schema7.properties.domain.type,
                                          parentSchema: schema7.properties.domain,
                                          data: data8,
                                        },
                                      ];
                                      return false;
                                    }
                                    const _errs19 = errors;
                                    if (errors === _errs18) {
                                    }
                                    var valid3 = _errs18 === errors;
                                  } else {
                                    var valid3 = true;
                                  }
                                  if (valid3) {
                                    if (data4.expires !== undefined) {
                                      const data9 = data4.expires;
                                      const _errs20 = errors;
                                      if (typeof data9 !== "string" && data9 !== null) {
                                        validate8.errors = [
                                          {
                                            instancePath: instancePath + "/cookies/" + i0 + "/expires",
                                            schemaPath: "cookie.json#/properties/expires/type",
                                            keyword: "type",
                                            params: { type: schema7.properties.expires.type },
                                            message: "must be string,null",
                                            schema: schema7.properties.expires.type,
                                            parentSchema: schema7.properties.expires,
                                            data: data9,
                                          },
                                        ];
                                        return false;
                                      }
                                      const _errs21 = errors;
                                      if (errors === _errs20) {
                                        if (typeof data9 == "number") {
                                        }
                                        if (errors === _errs20) {
                                          if (typeof data9 === "string") {
                                            if (!formats0.validate(data9)) {
                                              validate8.errors = [
                                                {
                                                  instancePath: instancePath + "/cookies/" + i0 + "/expires",
                                                  schemaPath: "cookie.json#/properties/expires/format",
                                                  keyword: "format",
                                                  params: { format: "date-time" },
                                                  message: 'must match format "' + "date-time" + '"',
                                                  schema: "date-time",
                                                  parentSchema: schema7.properties.expires,
                                                  data: data9,
                                                },
                                              ];
                                              return false;
                                            } else {
                                            }
                                          }
                                          if (errors === _errs20) {
                                          }
                                        }
                                      }
                                      var valid3 = _errs20 === errors;
                                    } else {
                                      var valid3 = true;
                                    }
                                    if (valid3) {
                                      if (data4.httpOnly !== undefined) {
                                        const data10 = data4.httpOnly;
                                        const _errs22 = errors;
                                        if (typeof data10 !== "boolean") {
                                          validate8.errors = [
                                            {
                                              instancePath: instancePath + "/cookies/" + i0 + "/httpOnly",
                                              schemaPath: "cookie.json#/properties/httpOnly/type",
                                              keyword: "type",
                                              params: { type: "boolean" },
                                              message: "must be boolean",
                                              schema: schema7.properties.httpOnly.type,
                                              parentSchema: schema7.properties.httpOnly,
                                              data: data10,
                                            },
                                          ];
                                          return false;
                                        }
                                        const _errs23 = errors;
                                        if (errors === _errs22) {
                                        }
                                        var valid3 = _errs22 === errors;
                                      } else {
                                        var valid3 = true;
                                      }
                                      if (valid3) {
                                        if (data4.secure !== undefined) {
                                          const data11 = data4.secure;
                                          const _errs24 = errors;
                                          if (typeof data11 !== "boolean") {
                                            validate8.errors = [
                                              {
                                                instancePath: instancePath + "/cookies/" + i0 + "/secure",
                                                schemaPath: "cookie.json#/properties/secure/type",
                                                keyword: "type",
                                                params: { type: "boolean" },
                                                message: "must be boolean",
                                                schema: schema7.properties.secure.type,
                                                parentSchema: schema7.properties.secure,
                                                data: data11,
                                              },
                                            ];
                                            return false;
                                          }
                                          const _errs25 = errors;
                                          if (errors === _errs24) {
                                          }
                                          var valid3 = _errs24 === errors;
                                        } else {
                                          var valid3 = true;
                                        }
                                        if (valid3) {
                                          if (data4.comment !== undefined) {
                                            const data12 = data4.comment;
                                            const _errs26 = errors;
                                            if (typeof data12 !== "string") {
                                              validate8.errors = [
                                                {
                                                  instancePath: instancePath + "/cookies/" + i0 + "/comment",
                                                  schemaPath: "cookie.json#/properties/comment/type",
                                                  keyword: "type",
                                                  params: { type: "string" },
                                                  message: "must be string",
                                                  schema: schema7.properties.comment.type,
                                                  parentSchema: schema7.properties.comment,
                                                  data: data12,
                                                },
                                              ];
                                              return false;
                                            }
                                            const _errs27 = errors;
                                            if (errors === _errs26) {
                                            }
                                            var valid3 = _errs26 === errors;
                                          } else {
                                            var valid3 = true;
                                          }
                                          if (valid3) {
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        } else {
                          validate8.errors = [
                            {
                              instancePath: instancePath + "/cookies/" + i0,
                              schemaPath: "cookie.json#/type",
                              keyword: "type",
                              params: { type: "object" },
                              message: "must be object",
                              schema: schema7.type,
                              parentSchema: schema7,
                              data: data4,
                            },
                          ];
                          return false;
                        }
                        if (errors === _errs10) {
                        }
                      }
                      var valid2 = _errs10 === errors;
                      if (valid2) {
                      }
                      var valid1 = _errs9 === errors;
                      if (!valid1) {
                        break;
                      }
                    }
                    if (valid1) {
                    }
                  } else {
                    validate8.errors = [
                      {
                        instancePath: instancePath + "/cookies",
                        schemaPath: "#/properties/cookies/type",
                        keyword: "type",
                        params: { type: "array" },
                        message: "must be array",
                        schema: schema10.properties.cookies.type,
                        parentSchema: schema10.properties.cookies,
                        data: data3,
                      },
                    ];
                    return false;
                  }
                  if (errors === _errs7) {
                  }
                }
                var valid0 = _errs7 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.headers !== undefined) {
                  const data13 = data.headers;
                  const _errs28 = errors;
                  const _errs29 = errors;
                  if (errors === _errs28) {
                    if (Array.isArray(data13)) {
                      var valid4 = true;
                      const len1 = data13.length;
                      for (let i1 = 0; i1 < len1; i1++) {
                        const data14 = data13[i1];
                        const _errs30 = errors;
                        const _errs31 = errors;
                        const _errs32 = errors;
                        if (errors === _errs31) {
                          if (data14 && typeof data14 == "object" && !Array.isArray(data14)) {
                            let missing2;
                            if (
                              (data14.name === undefined && (missing2 = "name")) ||
                              (data14.value === undefined && (missing2 = "value"))
                            ) {
                              validate8.errors = [
                                {
                                  instancePath: instancePath + "/headers/" + i1,
                                  schemaPath: "header.json#/required",
                                  keyword: "required",
                                  params: { missingProperty: missing2 },
                                  message: "must have required property '" + missing2 + "'",
                                  schema: schema12.required,
                                  parentSchema: schema12,
                                  data: data14,
                                },
                              ];
                              return false;
                            } else {
                              if (data14.name !== undefined) {
                                const data15 = data14.name;
                                const _errs33 = errors;
                                if (typeof data15 !== "string") {
                                  validate8.errors = [
                                    {
                                      instancePath: instancePath + "/headers/" + i1 + "/name",
                                      schemaPath: "header.json#/properties/name/type",
                                      keyword: "type",
                                      params: { type: "string" },
                                      message: "must be string",
                                      schema: schema12.properties.name.type,
                                      parentSchema: schema12.properties.name,
                                      data: data15,
                                    },
                                  ];
                                  return false;
                                }
                                const _errs34 = errors;
                                if (errors === _errs33) {
                                }
                                var valid6 = _errs33 === errors;
                              } else {
                                var valid6 = true;
                              }
                              if (valid6) {
                                if (data14.value !== undefined) {
                                  const data16 = data14.value;
                                  const _errs35 = errors;
                                  if (typeof data16 !== "string") {
                                    validate8.errors = [
                                      {
                                        instancePath: instancePath + "/headers/" + i1 + "/value",
                                        schemaPath: "header.json#/properties/value/type",
                                        keyword: "type",
                                        params: { type: "string" },
                                        message: "must be string",
                                        schema: schema12.properties.value.type,
                                        parentSchema: schema12.properties.value,
                                        data: data16,
                                      },
                                    ];
                                    return false;
                                  }
                                  const _errs36 = errors;
                                  if (errors === _errs35) {
                                  }
                                  var valid6 = _errs35 === errors;
                                } else {
                                  var valid6 = true;
                                }
                                if (valid6) {
                                  if (data14.comment !== undefined) {
                                    const data17 = data14.comment;
                                    const _errs37 = errors;
                                    if (typeof data17 !== "string") {
                                      validate8.errors = [
                                        {
                                          instancePath: instancePath + "/headers/" + i1 + "/comment",
                                          schemaPath: "header.json#/properties/comment/type",
                                          keyword: "type",
                                          params: { type: "string" },
                                          message: "must be string",
                                          schema: schema12.properties.comment.type,
                                          parentSchema: schema12.properties.comment,
                                          data: data17,
                                        },
                                      ];
                                      return false;
                                    }
                                    const _errs38 = errors;
                                    if (errors === _errs37) {
                                    }
                                    var valid6 = _errs37 === errors;
                                  } else {
                                    var valid6 = true;
                                  }
                                  if (valid6) {
                                  }
                                }
                              }
                            }
                          } else {
                            validate8.errors = [
                              {
                                instancePath: instancePath + "/headers/" + i1,
                                schemaPath: "header.json#/type",
                                keyword: "type",
                                params: { type: "object" },
                                message: "must be object",
                                schema: schema12.type,
                                parentSchema: schema12,
                                data: data14,
                              },
                            ];
                            return false;
                          }
                          if (errors === _errs31) {
                          }
                        }
                        var valid5 = _errs31 === errors;
                        if (valid5) {
                        }
                        var valid4 = _errs30 === errors;
                        if (!valid4) {
                          break;
                        }
                      }
                      if (valid4) {
                      }
                    } else {
                      validate8.errors = [
                        {
                          instancePath: instancePath + "/headers",
                          schemaPath: "#/properties/headers/type",
                          keyword: "type",
                          params: { type: "array" },
                          message: "must be array",
                          schema: schema10.properties.headers.type,
                          parentSchema: schema10.properties.headers,
                          data: data13,
                        },
                      ];
                      return false;
                    }
                    if (errors === _errs28) {
                    }
                  }
                  var valid0 = _errs28 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.queryString !== undefined) {
                    const data18 = data.queryString;
                    const _errs39 = errors;
                    const _errs40 = errors;
                    if (errors === _errs39) {
                      if (Array.isArray(data18)) {
                        var valid7 = true;
                        const len2 = data18.length;
                        for (let i2 = 0; i2 < len2; i2++) {
                          const data19 = data18[i2];
                          const _errs41 = errors;
                          const _errs42 = errors;
                          const _errs43 = errors;
                          if (errors === _errs42) {
                            if (data19 && typeof data19 == "object" && !Array.isArray(data19)) {
                              let missing3;
                              if (
                                (data19.name === undefined && (missing3 = "name")) ||
                                (data19.value === undefined && (missing3 = "value"))
                              ) {
                                validate8.errors = [
                                  {
                                    instancePath: instancePath + "/queryString/" + i2,
                                    schemaPath: "query.json#/required",
                                    keyword: "required",
                                    params: { missingProperty: missing3 },
                                    message: "must have required property '" + missing3 + "'",
                                    schema: schema13.required,
                                    parentSchema: schema13,
                                    data: data19,
                                  },
                                ];
                                return false;
                              } else {
                                if (data19.name !== undefined) {
                                  const data20 = data19.name;
                                  const _errs44 = errors;
                                  if (typeof data20 !== "string") {
                                    validate8.errors = [
                                      {
                                        instancePath: instancePath + "/queryString/" + i2 + "/name",
                                        schemaPath: "query.json#/properties/name/type",
                                        keyword: "type",
                                        params: { type: "string" },
                                        message: "must be string",
                                        schema: schema13.properties.name.type,
                                        parentSchema: schema13.properties.name,
                                        data: data20,
                                      },
                                    ];
                                    return false;
                                  }
                                  const _errs45 = errors;
                                  if (errors === _errs44) {
                                  }
                                  var valid9 = _errs44 === errors;
                                } else {
                                  var valid9 = true;
                                }
                                if (valid9) {
                                  if (data19.value !== undefined) {
                                    const data21 = data19.value;
                                    const _errs46 = errors;
                                    if (typeof data21 !== "string") {
                                      validate8.errors = [
                                        {
                                          instancePath: instancePath + "/queryString/" + i2 + "/value",
                                          schemaPath: "query.json#/properties/value/type",
                                          keyword: "type",
                                          params: { type: "string" },
                                          message: "must be string",
                                          schema: schema13.properties.value.type,
                                          parentSchema: schema13.properties.value,
                                          data: data21,
                                        },
                                      ];
                                      return false;
                                    }
                                    const _errs47 = errors;
                                    if (errors === _errs46) {
                                    }
                                    var valid9 = _errs46 === errors;
                                  } else {
                                    var valid9 = true;
                                  }
                                  if (valid9) {
                                    if (data19.comment !== undefined) {
                                      const data22 = data19.comment;
                                      const _errs48 = errors;
                                      if (typeof data22 !== "string") {
                                        validate8.errors = [
                                          {
                                            instancePath: instancePath + "/queryString/" + i2 + "/comment",
                                            schemaPath: "query.json#/properties/comment/type",
                                            keyword: "type",
                                            params: { type: "string" },
                                            message: "must be string",
                                            schema: schema13.properties.comment.type,
                                            parentSchema: schema13.properties.comment,
                                            data: data22,
                                          },
                                        ];
                                        return false;
                                      }
                                      const _errs49 = errors;
                                      if (errors === _errs48) {
                                      }
                                      var valid9 = _errs48 === errors;
                                    } else {
                                      var valid9 = true;
                                    }
                                    if (valid9) {
                                    }
                                  }
                                }
                              }
                            } else {
                              validate8.errors = [
                                {
                                  instancePath: instancePath + "/queryString/" + i2,
                                  schemaPath: "query.json#/type",
                                  keyword: "type",
                                  params: { type: "object" },
                                  message: "must be object",
                                  schema: schema13.type,
                                  parentSchema: schema13,
                                  data: data19,
                                },
                              ];
                              return false;
                            }
                            if (errors === _errs42) {
                            }
                          }
                          var valid8 = _errs42 === errors;
                          if (valid8) {
                          }
                          var valid7 = _errs41 === errors;
                          if (!valid7) {
                            break;
                          }
                        }
                        if (valid7) {
                        }
                      } else {
                        validate8.errors = [
                          {
                            instancePath: instancePath + "/queryString",
                            schemaPath: "#/properties/queryString/type",
                            keyword: "type",
                            params: { type: "array" },
                            message: "must be array",
                            schema: schema10.properties.queryString.type,
                            parentSchema: schema10.properties.queryString,
                            data: data18,
                          },
                        ];
                        return false;
                      }
                      if (errors === _errs39) {
                      }
                    }
                    var valid0 = _errs39 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.postData !== undefined) {
                      const data23 = data.postData;
                      const _errs50 = errors;
                      const _errs51 = errors;
                      const _errs52 = errors;
                      if (errors === _errs51) {
                        if (data23 && typeof data23 == "object" && !Array.isArray(data23)) {
                          let missing4;
                          if (data23.mimeType === undefined && (missing4 = "mimeType")) {
                            validate8.errors = [
                              {
                                instancePath: instancePath + "/postData",
                                schemaPath: "postData.json#/required",
                                keyword: "required",
                                params: { missingProperty: missing4 },
                                message: "must have required property '" + missing4 + "'",
                                schema: schema14.required,
                                parentSchema: schema14,
                                data: data23,
                              },
                            ];
                            return false;
                          } else {
                            if (data23.mimeType !== undefined) {
                              const data24 = data23.mimeType;
                              const _errs53 = errors;
                              if (typeof data24 !== "string") {
                                validate8.errors = [
                                  {
                                    instancePath: instancePath + "/postData/mimeType",
                                    schemaPath: "postData.json#/properties/mimeType/type",
                                    keyword: "type",
                                    params: { type: "string" },
                                    message: "must be string",
                                    schema: schema14.properties.mimeType.type,
                                    parentSchema: schema14.properties.mimeType,
                                    data: data24,
                                  },
                                ];
                                return false;
                              }
                              const _errs54 = errors;
                              if (errors === _errs53) {
                              }
                              var valid11 = _errs53 === errors;
                            } else {
                              var valid11 = true;
                            }
                            if (valid11) {
                              if (data23.text !== undefined) {
                                const data25 = data23.text;
                                const _errs55 = errors;
                                if (typeof data25 !== "string") {
                                  validate8.errors = [
                                    {
                                      instancePath: instancePath + "/postData/text",
                                      schemaPath: "postData.json#/properties/text/type",
                                      keyword: "type",
                                      params: { type: "string" },
                                      message: "must be string",
                                      schema: schema14.properties.text.type,
                                      parentSchema: schema14.properties.text,
                                      data: data25,
                                    },
                                  ];
                                  return false;
                                }
                                const _errs56 = errors;
                                if (errors === _errs55) {
                                }
                                var valid11 = _errs55 === errors;
                              } else {
                                var valid11 = true;
                              }
                              if (valid11) {
                                if (data23.params !== undefined) {
                                  const data26 = data23.params;
                                  const _errs57 = errors;
                                  if (!Array.isArray(data26)) {
                                    validate8.errors = [
                                      {
                                        instancePath: instancePath + "/postData/params",
                                        schemaPath: "postData.json#/properties/params/type",
                                        keyword: "type",
                                        params: { type: "array" },
                                        message: "must be array",
                                        schema: schema14.properties.params.type,
                                        parentSchema: schema14.properties.params,
                                        data: data26,
                                      },
                                    ];
                                    return false;
                                  }
                                  const _errs58 = errors;
                                  if (errors === _errs57) {
                                    if (data26 && typeof data26 == "object" && !Array.isArray(data26)) {
                                      let missing5;
                                      if (data26.name === undefined && (missing5 = "name")) {
                                        validate8.errors = [
                                          {
                                            instancePath: instancePath + "/postData/params",
                                            schemaPath: "postData.json#/properties/params/required",
                                            keyword: "required",
                                            params: { missingProperty: missing5 },
                                            message: "must have required property '" + missing5 + "'",
                                            schema: schema14.properties.params.required,
                                            parentSchema: schema14.properties.params,
                                            data: data26,
                                          },
                                        ];
                                        return false;
                                      } else {
                                        if (data26.name !== undefined) {
                                          const data27 = data26.name;
                                          const _errs59 = errors;
                                          if (typeof data27 !== "string") {
                                            validate8.errors = [
                                              {
                                                instancePath: instancePath + "/postData/params/name",
                                                schemaPath: "postData.json#/properties/params/properties/name/type",
                                                keyword: "type",
                                                params: { type: "string" },
                                                message: "must be string",
                                                schema: schema14.properties.params.properties.name.type,
                                                parentSchema: schema14.properties.params.properties.name,
                                                data: data27,
                                              },
                                            ];
                                            return false;
                                          }
                                          const _errs60 = errors;
                                          if (errors === _errs59) {
                                          }
                                          var valid12 = _errs59 === errors;
                                        } else {
                                          var valid12 = true;
                                        }
                                        if (valid12) {
                                          if (data26.value !== undefined) {
                                            const data28 = data26.value;
                                            const _errs61 = errors;
                                            if (typeof data28 !== "string") {
                                              validate8.errors = [
                                                {
                                                  instancePath: instancePath + "/postData/params/value",
                                                  schemaPath: "postData.json#/properties/params/properties/value/type",
                                                  keyword: "type",
                                                  params: { type: "string" },
                                                  message: "must be string",
                                                  schema: schema14.properties.params.properties.value.type,
                                                  parentSchema: schema14.properties.params.properties.value,
                                                  data: data28,
                                                },
                                              ];
                                              return false;
                                            }
                                            const _errs62 = errors;
                                            if (errors === _errs61) {
                                            }
                                            var valid12 = _errs61 === errors;
                                          } else {
                                            var valid12 = true;
                                          }
                                          if (valid12) {
                                            if (data26.fileName !== undefined) {
                                              const data29 = data26.fileName;
                                              const _errs63 = errors;
                                              if (typeof data29 !== "string") {
                                                validate8.errors = [
                                                  {
                                                    instancePath: instancePath + "/postData/params/fileName",
                                                    schemaPath:
                                                      "postData.json#/properties/params/properties/fileName/type",
                                                    keyword: "type",
                                                    params: { type: "string" },
                                                    message: "must be string",
                                                    schema: schema14.properties.params.properties.fileName.type,
                                                    parentSchema: schema14.properties.params.properties.fileName,
                                                    data: data29,
                                                  },
                                                ];
                                                return false;
                                              }
                                              const _errs64 = errors;
                                              if (errors === _errs63) {
                                              }
                                              var valid12 = _errs63 === errors;
                                            } else {
                                              var valid12 = true;
                                            }
                                            if (valid12) {
                                              if (data26.contentType !== undefined) {
                                                const data30 = data26.contentType;
                                                const _errs65 = errors;
                                                if (typeof data30 !== "string") {
                                                  validate8.errors = [
                                                    {
                                                      instancePath: instancePath + "/postData/params/contentType",
                                                      schemaPath:
                                                        "postData.json#/properties/params/properties/contentType/type",
                                                      keyword: "type",
                                                      params: { type: "string" },
                                                      message: "must be string",
                                                      schema: schema14.properties.params.properties.contentType.type,
                                                      parentSchema: schema14.properties.params.properties.contentType,
                                                      data: data30,
                                                    },
                                                  ];
                                                  return false;
                                                }
                                                const _errs66 = errors;
                                                if (errors === _errs65) {
                                                }
                                                var valid12 = _errs65 === errors;
                                              } else {
                                                var valid12 = true;
                                              }
                                              if (valid12) {
                                                if (data26.comment !== undefined) {
                                                  const data31 = data26.comment;
                                                  const _errs67 = errors;
                                                  if (typeof data31 !== "string") {
                                                    validate8.errors = [
                                                      {
                                                        instancePath: instancePath + "/postData/params/comment",
                                                        schemaPath:
                                                          "postData.json#/properties/params/properties/comment/type",
                                                        keyword: "type",
                                                        params: { type: "string" },
                                                        message: "must be string",
                                                        schema: schema14.properties.params.properties.comment.type,
                                                        parentSchema: schema14.properties.params.properties.comment,
                                                        data: data31,
                                                      },
                                                    ];
                                                    return false;
                                                  }
                                                  const _errs68 = errors;
                                                  if (errors === _errs67) {
                                                  }
                                                  var valid12 = _errs67 === errors;
                                                } else {
                                                  var valid12 = true;
                                                }
                                                if (valid12) {
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    if (errors === _errs57) {
                                    }
                                  }
                                  var valid11 = _errs57 === errors;
                                } else {
                                  var valid11 = true;
                                }
                                if (valid11) {
                                  if (data23.comment !== undefined) {
                                    const data32 = data23.comment;
                                    const _errs69 = errors;
                                    if (typeof data32 !== "string") {
                                      validate8.errors = [
                                        {
                                          instancePath: instancePath + "/postData/comment",
                                          schemaPath: "postData.json#/properties/comment/type",
                                          keyword: "type",
                                          params: { type: "string" },
                                          message: "must be string",
                                          schema: schema14.properties.comment.type,
                                          parentSchema: schema14.properties.comment,
                                          data: data32,
                                        },
                                      ];
                                      return false;
                                    }
                                    const _errs70 = errors;
                                    if (errors === _errs69) {
                                    }
                                    var valid11 = _errs69 === errors;
                                  } else {
                                    var valid11 = true;
                                  }
                                  if (valid11) {
                                  }
                                }
                              }
                            }
                          }
                        } else {
                          validate8.errors = [
                            {
                              instancePath: instancePath + "/postData",
                              schemaPath: "postData.json#/type",
                              keyword: "type",
                              params: { type: "object" },
                              message: "must be object",
                              schema: schema14.type,
                              parentSchema: schema14,
                              data: data23,
                            },
                          ];
                          return false;
                        }
                        if (errors === _errs51) {
                        }
                      }
                      var valid10 = _errs51 === errors;
                      if (valid10) {
                      }
                      var valid0 = _errs50 === errors;
                    } else {
                      var valid0 = true;
                    }
                    if (valid0) {
                      if (data.headersSize !== undefined) {
                        const data33 = data.headersSize;
                        const _errs71 = errors;
                        if (!(typeof data33 == "number" && !(data33 % 1) && !isNaN(data33))) {
                          validate8.errors = [
                            {
                              instancePath: instancePath + "/headersSize",
                              schemaPath: "#/properties/headersSize/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer",
                              schema: schema10.properties.headersSize.type,
                              parentSchema: schema10.properties.headersSize,
                              data: data33,
                            },
                          ];
                          return false;
                        }
                        const _errs72 = errors;
                        if (errors === _errs71) {
                        }
                        var valid0 = _errs71 === errors;
                      } else {
                        var valid0 = true;
                      }
                      if (valid0) {
                        if (data.bodySize !== undefined) {
                          const data34 = data.bodySize;
                          const _errs73 = errors;
                          if (!(typeof data34 == "number" && !(data34 % 1) && !isNaN(data34))) {
                            validate8.errors = [
                              {
                                instancePath: instancePath + "/bodySize",
                                schemaPath: "#/properties/bodySize/type",
                                keyword: "type",
                                params: { type: "integer" },
                                message: "must be integer",
                                schema: schema10.properties.bodySize.type,
                                parentSchema: schema10.properties.bodySize,
                                data: data34,
                              },
                            ];
                            return false;
                          }
                          const _errs74 = errors;
                          if (errors === _errs73) {
                          }
                          var valid0 = _errs73 === errors;
                        } else {
                          var valid0 = true;
                        }
                        if (valid0) {
                          if (data.comment !== undefined) {
                            const data35 = data.comment;
                            const _errs75 = errors;
                            if (typeof data35 !== "string") {
                              validate8.errors = [
                                {
                                  instancePath: instancePath + "/comment",
                                  schemaPath: "#/properties/comment/type",
                                  keyword: "type",
                                  params: { type: "string" },
                                  message: "must be string",
                                  schema: schema10.properties.comment.type,
                                  parentSchema: schema10.properties.comment,
                                  data: data35,
                                },
                              ];
                              return false;
                            }
                            const _errs76 = errors;
                            if (errors === _errs75) {
                            }
                            var valid0 = _errs75 === errors;
                          } else {
                            var valid0 = true;
                          }
                          if (valid0) {
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate8.errors = [
        {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
          schema: schema10.type,
          parentSchema: schema10,
          data,
        },
      ];
      return false;
    }
    if (errors === 0) {
    }
  }
  validate8.errors = vErrors;
  return errors === 0;
}

const schema15 = {
  $id: "response.json#",
  $schema: "http://json-schema.org/draft-06/schema#",
  type: "object",
  required: [
    "status",
    "statusText",
    "httpVersion",
    "cookies",
    "headers",
    "content",
    "redirectURL",
    "headersSize",
    "bodySize",
  ],
  properties: {
    status: { type: "integer" },
    statusText: { type: "string" },
    httpVersion: { type: "string" },
    cookies: { type: "array", items: { $ref: "cookie.json#" } },
    headers: { type: "array", items: { $ref: "header.json#" } },
    content: { $ref: "content.json#" },
    redirectURL: { type: "string" },
    headersSize: { type: "integer" },
    bodySize: { type: "integer" },
    comment: { type: "string" },
  },
};

function validate10(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="response.json#" */ const vErrors = null;
  const errors = 0;
  const _errs0 = errors;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (
        (data.status === undefined && (missing0 = "status")) ||
        (data.statusText === undefined && (missing0 = "statusText")) ||
        (data.httpVersion === undefined && (missing0 = "httpVersion")) ||
        (data.cookies === undefined && (missing0 = "cookies")) ||
        (data.headers === undefined && (missing0 = "headers")) ||
        (data.content === undefined && (missing0 = "content")) ||
        (data.redirectURL === undefined && (missing0 = "redirectURL")) ||
        (data.headersSize === undefined && (missing0 = "headersSize")) ||
        (data.bodySize === undefined && (missing0 = "bodySize"))
      ) {
        validate10.errors = [
          {
            instancePath,
            schemaPath: "#/required",
            keyword: "required",
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
            schema: schema15.required,
            parentSchema: schema15,
            data,
          },
        ];
        return false;
      } else {
        if (data.status !== undefined) {
          const data0 = data.status;
          const _errs1 = errors;
          if (!(typeof data0 == "number" && !(data0 % 1) && !isNaN(data0))) {
            validate10.errors = [
              {
                instancePath: instancePath + "/status",
                schemaPath: "#/properties/status/type",
                keyword: "type",
                params: { type: "integer" },
                message: "must be integer",
                schema: schema15.properties.status.type,
                parentSchema: schema15.properties.status,
                data: data0,
              },
            ];
            return false;
          }
          const _errs2 = errors;
          if (errors === _errs1) {
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.statusText !== undefined) {
            const data1 = data.statusText;
            const _errs3 = errors;
            if (typeof data1 !== "string") {
              validate10.errors = [
                {
                  instancePath: instancePath + "/statusText",
                  schemaPath: "#/properties/statusText/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                  schema: schema15.properties.statusText.type,
                  parentSchema: schema15.properties.statusText,
                  data: data1,
                },
              ];
              return false;
            }
            const _errs4 = errors;
            if (errors === _errs3) {
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.httpVersion !== undefined) {
              const data2 = data.httpVersion;
              const _errs5 = errors;
              if (typeof data2 !== "string") {
                validate10.errors = [
                  {
                    instancePath: instancePath + "/httpVersion",
                    schemaPath: "#/properties/httpVersion/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string",
                    schema: schema15.properties.httpVersion.type,
                    parentSchema: schema15.properties.httpVersion,
                    data: data2,
                  },
                ];
                return false;
              }
              const _errs6 = errors;
              if (errors === _errs5) {
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.cookies !== undefined) {
                const data3 = data.cookies;
                const _errs7 = errors;
                const _errs8 = errors;
                if (errors === _errs7) {
                  if (Array.isArray(data3)) {
                    var valid1 = true;
                    const len0 = data3.length;
                    for (let i0 = 0; i0 < len0; i0++) {
                      const data4 = data3[i0];
                      const _errs9 = errors;
                      const _errs10 = errors;
                      const _errs11 = errors;
                      if (errors === _errs10) {
                        if (data4 && typeof data4 == "object" && !Array.isArray(data4)) {
                          let missing1;
                          if (
                            (data4.name === undefined && (missing1 = "name")) ||
                            (data4.value === undefined && (missing1 = "value"))
                          ) {
                            validate10.errors = [
                              {
                                instancePath: instancePath + "/cookies/" + i0,
                                schemaPath: "cookie.json#/required",
                                keyword: "required",
                                params: { missingProperty: missing1 },
                                message: "must have required property '" + missing1 + "'",
                                schema: schema7.required,
                                parentSchema: schema7,
                                data: data4,
                              },
                            ];
                            return false;
                          } else {
                            if (data4.name !== undefined) {
                              const data5 = data4.name;
                              const _errs12 = errors;
                              if (typeof data5 !== "string") {
                                validate10.errors = [
                                  {
                                    instancePath: instancePath + "/cookies/" + i0 + "/name",
                                    schemaPath: "cookie.json#/properties/name/type",
                                    keyword: "type",
                                    params: { type: "string" },
                                    message: "must be string",
                                    schema: schema7.properties.name.type,
                                    parentSchema: schema7.properties.name,
                                    data: data5,
                                  },
                                ];
                                return false;
                              }
                              const _errs13 = errors;
                              if (errors === _errs12) {
                              }
                              var valid3 = _errs12 === errors;
                            } else {
                              var valid3 = true;
                            }
                            if (valid3) {
                              if (data4.value !== undefined) {
                                const data6 = data4.value;
                                const _errs14 = errors;
                                if (typeof data6 !== "string") {
                                  validate10.errors = [
                                    {
                                      instancePath: instancePath + "/cookies/" + i0 + "/value",
                                      schemaPath: "cookie.json#/properties/value/type",
                                      keyword: "type",
                                      params: { type: "string" },
                                      message: "must be string",
                                      schema: schema7.properties.value.type,
                                      parentSchema: schema7.properties.value,
                                      data: data6,
                                    },
                                  ];
                                  return false;
                                }
                                const _errs15 = errors;
                                if (errors === _errs14) {
                                }
                                var valid3 = _errs14 === errors;
                              } else {
                                var valid3 = true;
                              }
                              if (valid3) {
                                if (data4.path !== undefined) {
                                  const data7 = data4.path;
                                  const _errs16 = errors;
                                  if (typeof data7 !== "string") {
                                    validate10.errors = [
                                      {
                                        instancePath: instancePath + "/cookies/" + i0 + "/path",
                                        schemaPath: "cookie.json#/properties/path/type",
                                        keyword: "type",
                                        params: { type: "string" },
                                        message: "must be string",
                                        schema: schema7.properties.path.type,
                                        parentSchema: schema7.properties.path,
                                        data: data7,
                                      },
                                    ];
                                    return false;
                                  }
                                  const _errs17 = errors;
                                  if (errors === _errs16) {
                                  }
                                  var valid3 = _errs16 === errors;
                                } else {
                                  var valid3 = true;
                                }
                                if (valid3) {
                                  if (data4.domain !== undefined) {
                                    const data8 = data4.domain;
                                    const _errs18 = errors;
                                    if (typeof data8 !== "string") {
                                      validate10.errors = [
                                        {
                                          instancePath: instancePath + "/cookies/" + i0 + "/domain",
                                          schemaPath: "cookie.json#/properties/domain/type",
                                          keyword: "type",
                                          params: { type: "string" },
                                          message: "must be string",
                                          schema: schema7.properties.domain.type,
                                          parentSchema: schema7.properties.domain,
                                          data: data8,
                                        },
                                      ];
                                      return false;
                                    }
                                    const _errs19 = errors;
                                    if (errors === _errs18) {
                                    }
                                    var valid3 = _errs18 === errors;
                                  } else {
                                    var valid3 = true;
                                  }
                                  if (valid3) {
                                    if (data4.expires !== undefined) {
                                      const data9 = data4.expires;
                                      const _errs20 = errors;
                                      if (typeof data9 !== "string" && data9 !== null) {
                                        validate10.errors = [
                                          {
                                            instancePath: instancePath + "/cookies/" + i0 + "/expires",
                                            schemaPath: "cookie.json#/properties/expires/type",
                                            keyword: "type",
                                            params: { type: schema7.properties.expires.type },
                                            message: "must be string,null",
                                            schema: schema7.properties.expires.type,
                                            parentSchema: schema7.properties.expires,
                                            data: data9,
                                          },
                                        ];
                                        return false;
                                      }
                                      const _errs21 = errors;
                                      if (errors === _errs20) {
                                        if (typeof data9 == "number") {
                                        }
                                        if (errors === _errs20) {
                                          if (typeof data9 === "string") {
                                            if (!formats0.validate(data9)) {
                                              validate10.errors = [
                                                {
                                                  instancePath: instancePath + "/cookies/" + i0 + "/expires",
                                                  schemaPath: "cookie.json#/properties/expires/format",
                                                  keyword: "format",
                                                  params: { format: "date-time" },
                                                  message: 'must match format "' + "date-time" + '"',
                                                  schema: "date-time",
                                                  parentSchema: schema7.properties.expires,
                                                  data: data9,
                                                },
                                              ];
                                              return false;
                                            } else {
                                            }
                                          }
                                          if (errors === _errs20) {
                                          }
                                        }
                                      }
                                      var valid3 = _errs20 === errors;
                                    } else {
                                      var valid3 = true;
                                    }
                                    if (valid3) {
                                      if (data4.httpOnly !== undefined) {
                                        const data10 = data4.httpOnly;
                                        const _errs22 = errors;
                                        if (typeof data10 !== "boolean") {
                                          validate10.errors = [
                                            {
                                              instancePath: instancePath + "/cookies/" + i0 + "/httpOnly",
                                              schemaPath: "cookie.json#/properties/httpOnly/type",
                                              keyword: "type",
                                              params: { type: "boolean" },
                                              message: "must be boolean",
                                              schema: schema7.properties.httpOnly.type,
                                              parentSchema: schema7.properties.httpOnly,
                                              data: data10,
                                            },
                                          ];
                                          return false;
                                        }
                                        const _errs23 = errors;
                                        if (errors === _errs22) {
                                        }
                                        var valid3 = _errs22 === errors;
                                      } else {
                                        var valid3 = true;
                                      }
                                      if (valid3) {
                                        if (data4.secure !== undefined) {
                                          const data11 = data4.secure;
                                          const _errs24 = errors;
                                          if (typeof data11 !== "boolean") {
                                            validate10.errors = [
                                              {
                                                instancePath: instancePath + "/cookies/" + i0 + "/secure",
                                                schemaPath: "cookie.json#/properties/secure/type",
                                                keyword: "type",
                                                params: { type: "boolean" },
                                                message: "must be boolean",
                                                schema: schema7.properties.secure.type,
                                                parentSchema: schema7.properties.secure,
                                                data: data11,
                                              },
                                            ];
                                            return false;
                                          }
                                          const _errs25 = errors;
                                          if (errors === _errs24) {
                                          }
                                          var valid3 = _errs24 === errors;
                                        } else {
                                          var valid3 = true;
                                        }
                                        if (valid3) {
                                          if (data4.comment !== undefined) {
                                            const data12 = data4.comment;
                                            const _errs26 = errors;
                                            if (typeof data12 !== "string") {
                                              validate10.errors = [
                                                {
                                                  instancePath: instancePath + "/cookies/" + i0 + "/comment",
                                                  schemaPath: "cookie.json#/properties/comment/type",
                                                  keyword: "type",
                                                  params: { type: "string" },
                                                  message: "must be string",
                                                  schema: schema7.properties.comment.type,
                                                  parentSchema: schema7.properties.comment,
                                                  data: data12,
                                                },
                                              ];
                                              return false;
                                            }
                                            const _errs27 = errors;
                                            if (errors === _errs26) {
                                            }
                                            var valid3 = _errs26 === errors;
                                          } else {
                                            var valid3 = true;
                                          }
                                          if (valid3) {
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        } else {
                          validate10.errors = [
                            {
                              instancePath: instancePath + "/cookies/" + i0,
                              schemaPath: "cookie.json#/type",
                              keyword: "type",
                              params: { type: "object" },
                              message: "must be object",
                              schema: schema7.type,
                              parentSchema: schema7,
                              data: data4,
                            },
                          ];
                          return false;
                        }
                        if (errors === _errs10) {
                        }
                      }
                      var valid2 = _errs10 === errors;
                      if (valid2) {
                      }
                      var valid1 = _errs9 === errors;
                      if (!valid1) {
                        break;
                      }
                    }
                    if (valid1) {
                    }
                  } else {
                    validate10.errors = [
                      {
                        instancePath: instancePath + "/cookies",
                        schemaPath: "#/properties/cookies/type",
                        keyword: "type",
                        params: { type: "array" },
                        message: "must be array",
                        schema: schema15.properties.cookies.type,
                        parentSchema: schema15.properties.cookies,
                        data: data3,
                      },
                    ];
                    return false;
                  }
                  if (errors === _errs7) {
                  }
                }
                var valid0 = _errs7 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.headers !== undefined) {
                  const data13 = data.headers;
                  const _errs28 = errors;
                  const _errs29 = errors;
                  if (errors === _errs28) {
                    if (Array.isArray(data13)) {
                      var valid4 = true;
                      const len1 = data13.length;
                      for (let i1 = 0; i1 < len1; i1++) {
                        const data14 = data13[i1];
                        const _errs30 = errors;
                        const _errs31 = errors;
                        const _errs32 = errors;
                        if (errors === _errs31) {
                          if (data14 && typeof data14 == "object" && !Array.isArray(data14)) {
                            let missing2;
                            if (
                              (data14.name === undefined && (missing2 = "name")) ||
                              (data14.value === undefined && (missing2 = "value"))
                            ) {
                              validate10.errors = [
                                {
                                  instancePath: instancePath + "/headers/" + i1,
                                  schemaPath: "header.json#/required",
                                  keyword: "required",
                                  params: { missingProperty: missing2 },
                                  message: "must have required property '" + missing2 + "'",
                                  schema: schema12.required,
                                  parentSchema: schema12,
                                  data: data14,
                                },
                              ];
                              return false;
                            } else {
                              if (data14.name !== undefined) {
                                const data15 = data14.name;
                                const _errs33 = errors;
                                if (typeof data15 !== "string") {
                                  validate10.errors = [
                                    {
                                      instancePath: instancePath + "/headers/" + i1 + "/name",
                                      schemaPath: "header.json#/properties/name/type",
                                      keyword: "type",
                                      params: { type: "string" },
                                      message: "must be string",
                                      schema: schema12.properties.name.type,
                                      parentSchema: schema12.properties.name,
                                      data: data15,
                                    },
                                  ];
                                  return false;
                                }
                                const _errs34 = errors;
                                if (errors === _errs33) {
                                }
                                var valid6 = _errs33 === errors;
                              } else {
                                var valid6 = true;
                              }
                              if (valid6) {
                                if (data14.value !== undefined) {
                                  const data16 = data14.value;
                                  const _errs35 = errors;
                                  if (typeof data16 !== "string") {
                                    validate10.errors = [
                                      {
                                        instancePath: instancePath + "/headers/" + i1 + "/value",
                                        schemaPath: "header.json#/properties/value/type",
                                        keyword: "type",
                                        params: { type: "string" },
                                        message: "must be string",
                                        schema: schema12.properties.value.type,
                                        parentSchema: schema12.properties.value,
                                        data: data16,
                                      },
                                    ];
                                    return false;
                                  }
                                  const _errs36 = errors;
                                  if (errors === _errs35) {
                                  }
                                  var valid6 = _errs35 === errors;
                                } else {
                                  var valid6 = true;
                                }
                                if (valid6) {
                                  if (data14.comment !== undefined) {
                                    const data17 = data14.comment;
                                    const _errs37 = errors;
                                    if (typeof data17 !== "string") {
                                      validate10.errors = [
                                        {
                                          instancePath: instancePath + "/headers/" + i1 + "/comment",
                                          schemaPath: "header.json#/properties/comment/type",
                                          keyword: "type",
                                          params: { type: "string" },
                                          message: "must be string",
                                          schema: schema12.properties.comment.type,
                                          parentSchema: schema12.properties.comment,
                                          data: data17,
                                        },
                                      ];
                                      return false;
                                    }
                                    const _errs38 = errors;
                                    if (errors === _errs37) {
                                    }
                                    var valid6 = _errs37 === errors;
                                  } else {
                                    var valid6 = true;
                                  }
                                  if (valid6) {
                                  }
                                }
                              }
                            }
                          } else {
                            validate10.errors = [
                              {
                                instancePath: instancePath + "/headers/" + i1,
                                schemaPath: "header.json#/type",
                                keyword: "type",
                                params: { type: "object" },
                                message: "must be object",
                                schema: schema12.type,
                                parentSchema: schema12,
                                data: data14,
                              },
                            ];
                            return false;
                          }
                          if (errors === _errs31) {
                          }
                        }
                        var valid5 = _errs31 === errors;
                        if (valid5) {
                        }
                        var valid4 = _errs30 === errors;
                        if (!valid4) {
                          break;
                        }
                      }
                      if (valid4) {
                      }
                    } else {
                      validate10.errors = [
                        {
                          instancePath: instancePath + "/headers",
                          schemaPath: "#/properties/headers/type",
                          keyword: "type",
                          params: { type: "array" },
                          message: "must be array",
                          schema: schema15.properties.headers.type,
                          parentSchema: schema15.properties.headers,
                          data: data13,
                        },
                      ];
                      return false;
                    }
                    if (errors === _errs28) {
                    }
                  }
                  var valid0 = _errs28 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.content !== undefined) {
                    const data18 = data.content;
                    const _errs39 = errors;
                    const _errs40 = errors;
                    const _errs41 = errors;
                    if (errors === _errs40) {
                      if (data18 && typeof data18 == "object" && !Array.isArray(data18)) {
                        let missing3;
                        if (
                          (data18.size === undefined && (missing3 = "size")) ||
                          (data18.mimeType === undefined && (missing3 = "mimeType"))
                        ) {
                          validate10.errors = [
                            {
                              instancePath: instancePath + "/content",
                              schemaPath: "content.json#/required",
                              keyword: "required",
                              params: { missingProperty: missing3 },
                              message: "must have required property '" + missing3 + "'",
                              schema: schema6.required,
                              parentSchema: schema6,
                              data: data18,
                            },
                          ];
                          return false;
                        } else {
                          if (data18.size !== undefined) {
                            const data19 = data18.size;
                            const _errs42 = errors;
                            if (!(typeof data19 == "number" && !(data19 % 1) && !isNaN(data19))) {
                              validate10.errors = [
                                {
                                  instancePath: instancePath + "/content/size",
                                  schemaPath: "content.json#/properties/size/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer",
                                  schema: schema6.properties.size.type,
                                  parentSchema: schema6.properties.size,
                                  data: data19,
                                },
                              ];
                              return false;
                            }
                            const _errs43 = errors;
                            if (errors === _errs42) {
                            }
                            var valid8 = _errs42 === errors;
                          } else {
                            var valid8 = true;
                          }
                          if (valid8) {
                            if (data18.compression !== undefined) {
                              const data20 = data18.compression;
                              const _errs44 = errors;
                              if (!(typeof data20 == "number" && !(data20 % 1) && !isNaN(data20))) {
                                validate10.errors = [
                                  {
                                    instancePath: instancePath + "/content/compression",
                                    schemaPath: "content.json#/properties/compression/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer",
                                    schema: schema6.properties.compression.type,
                                    parentSchema: schema6.properties.compression,
                                    data: data20,
                                  },
                                ];
                                return false;
                              }
                              const _errs45 = errors;
                              if (errors === _errs44) {
                              }
                              var valid8 = _errs44 === errors;
                            } else {
                              var valid8 = true;
                            }
                            if (valid8) {
                              if (data18.mimeType !== undefined) {
                                const data21 = data18.mimeType;
                                const _errs46 = errors;
                                if (typeof data21 !== "string") {
                                  validate10.errors = [
                                    {
                                      instancePath: instancePath + "/content/mimeType",
                                      schemaPath: "content.json#/properties/mimeType/type",
                                      keyword: "type",
                                      params: { type: "string" },
                                      message: "must be string",
                                      schema: schema6.properties.mimeType.type,
                                      parentSchema: schema6.properties.mimeType,
                                      data: data21,
                                    },
                                  ];
                                  return false;
                                }
                                const _errs47 = errors;
                                if (errors === _errs46) {
                                }
                                var valid8 = _errs46 === errors;
                              } else {
                                var valid8 = true;
                              }
                              if (valid8) {
                                if (data18.text !== undefined) {
                                  const data22 = data18.text;
                                  const _errs48 = errors;
                                  if (typeof data22 !== "string") {
                                    validate10.errors = [
                                      {
                                        instancePath: instancePath + "/content/text",
                                        schemaPath: "content.json#/properties/text/type",
                                        keyword: "type",
                                        params: { type: "string" },
                                        message: "must be string",
                                        schema: schema6.properties.text.type,
                                        parentSchema: schema6.properties.text,
                                        data: data22,
                                      },
                                    ];
                                    return false;
                                  }
                                  const _errs49 = errors;
                                  if (errors === _errs48) {
                                  }
                                  var valid8 = _errs48 === errors;
                                } else {
                                  var valid8 = true;
                                }
                                if (valid8) {
                                  if (data18.encoding !== undefined) {
                                    const data23 = data18.encoding;
                                    const _errs50 = errors;
                                    if (typeof data23 !== "string") {
                                      validate10.errors = [
                                        {
                                          instancePath: instancePath + "/content/encoding",
                                          schemaPath: "content.json#/properties/encoding/type",
                                          keyword: "type",
                                          params: { type: "string" },
                                          message: "must be string",
                                          schema: schema6.properties.encoding.type,
                                          parentSchema: schema6.properties.encoding,
                                          data: data23,
                                        },
                                      ];
                                      return false;
                                    }
                                    const _errs51 = errors;
                                    if (errors === _errs50) {
                                    }
                                    var valid8 = _errs50 === errors;
                                  } else {
                                    var valid8 = true;
                                  }
                                  if (valid8) {
                                    if (data18.comment !== undefined) {
                                      const data24 = data18.comment;
                                      const _errs52 = errors;
                                      if (typeof data24 !== "string") {
                                        validate10.errors = [
                                          {
                                            instancePath: instancePath + "/content/comment",
                                            schemaPath: "content.json#/properties/comment/type",
                                            keyword: "type",
                                            params: { type: "string" },
                                            message: "must be string",
                                            schema: schema6.properties.comment.type,
                                            parentSchema: schema6.properties.comment,
                                            data: data24,
                                          },
                                        ];
                                        return false;
                                      }
                                      const _errs53 = errors;
                                      if (errors === _errs52) {
                                      }
                                      var valid8 = _errs52 === errors;
                                    } else {
                                      var valid8 = true;
                                    }
                                    if (valid8) {
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      } else {
                        validate10.errors = [
                          {
                            instancePath: instancePath + "/content",
                            schemaPath: "content.json#/type",
                            keyword: "type",
                            params: { type: "object" },
                            message: "must be object",
                            schema: schema6.type,
                            parentSchema: schema6,
                            data: data18,
                          },
                        ];
                        return false;
                      }
                      if (errors === _errs40) {
                      }
                    }
                    var valid7 = _errs40 === errors;
                    if (valid7) {
                    }
                    var valid0 = _errs39 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.redirectURL !== undefined) {
                      const data25 = data.redirectURL;
                      const _errs54 = errors;
                      if (typeof data25 !== "string") {
                        validate10.errors = [
                          {
                            instancePath: instancePath + "/redirectURL",
                            schemaPath: "#/properties/redirectURL/type",
                            keyword: "type",
                            params: { type: "string" },
                            message: "must be string",
                            schema: schema15.properties.redirectURL.type,
                            parentSchema: schema15.properties.redirectURL,
                            data: data25,
                          },
                        ];
                        return false;
                      }
                      const _errs55 = errors;
                      if (errors === _errs54) {
                      }
                      var valid0 = _errs54 === errors;
                    } else {
                      var valid0 = true;
                    }
                    if (valid0) {
                      if (data.headersSize !== undefined) {
                        const data26 = data.headersSize;
                        const _errs56 = errors;
                        if (!(typeof data26 == "number" && !(data26 % 1) && !isNaN(data26))) {
                          validate10.errors = [
                            {
                              instancePath: instancePath + "/headersSize",
                              schemaPath: "#/properties/headersSize/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer",
                              schema: schema15.properties.headersSize.type,
                              parentSchema: schema15.properties.headersSize,
                              data: data26,
                            },
                          ];
                          return false;
                        }
                        const _errs57 = errors;
                        if (errors === _errs56) {
                        }
                        var valid0 = _errs56 === errors;
                      } else {
                        var valid0 = true;
                      }
                      if (valid0) {
                        if (data.bodySize !== undefined) {
                          const data27 = data.bodySize;
                          const _errs58 = errors;
                          if (!(typeof data27 == "number" && !(data27 % 1) && !isNaN(data27))) {
                            validate10.errors = [
                              {
                                instancePath: instancePath + "/bodySize",
                                schemaPath: "#/properties/bodySize/type",
                                keyword: "type",
                                params: { type: "integer" },
                                message: "must be integer",
                                schema: schema15.properties.bodySize.type,
                                parentSchema: schema15.properties.bodySize,
                                data: data27,
                              },
                            ];
                            return false;
                          }
                          const _errs59 = errors;
                          if (errors === _errs58) {
                          }
                          var valid0 = _errs58 === errors;
                        } else {
                          var valid0 = true;
                        }
                        if (valid0) {
                          if (data.comment !== undefined) {
                            const data28 = data.comment;
                            const _errs60 = errors;
                            if (typeof data28 !== "string") {
                              validate10.errors = [
                                {
                                  instancePath: instancePath + "/comment",
                                  schemaPath: "#/properties/comment/type",
                                  keyword: "type",
                                  params: { type: "string" },
                                  message: "must be string",
                                  schema: schema15.properties.comment.type,
                                  parentSchema: schema15.properties.comment,
                                  data: data28,
                                },
                              ];
                              return false;
                            }
                            const _errs61 = errors;
                            if (errors === _errs60) {
                            }
                            var valid0 = _errs60 === errors;
                          } else {
                            var valid0 = true;
                          }
                          if (valid0) {
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate10.errors = [
        {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
          schema: schema15.type,
          parentSchema: schema15,
          data,
        },
      ];
      return false;
    }
    if (errors === 0) {
    }
  }
  validate10.errors = vErrors;
  return errors === 0;
}

function validate7(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="entry.json#" */ let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (
        (data.startedDateTime === undefined && (missing0 = "startedDateTime")) ||
        (data.time === undefined && (missing0 = "time")) ||
        (data.request === undefined && (missing0 = "request")) ||
        (data.response === undefined && (missing0 = "response")) ||
        (data.cache === undefined && (missing0 = "cache")) ||
        (data.timings === undefined && (missing0 = "timings"))
      ) {
        validate7.errors = [
          {
            instancePath,
            schemaPath: "#/required",
            keyword: "required",
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
            schema: schema9.required,
            parentSchema: schema9,
            data,
          },
        ];
        return false;
      } else {
        if (data.pageref !== undefined) {
          const data0 = data.pageref;
          const _errs1 = errors;
          if (typeof data0 !== "string") {
            validate7.errors = [
              {
                instancePath: instancePath + "/pageref",
                schemaPath: "#/properties/pageref/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
                schema: schema9.properties.pageref.type,
                parentSchema: schema9.properties.pageref,
                data: data0,
              },
            ];
            return false;
          }
          const _errs2 = errors;
          if (errors === _errs1) {
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.startedDateTime !== undefined) {
            const data1 = data.startedDateTime;
            const _errs3 = errors;
            const _errs4 = errors;
            if (errors === _errs3) {
              if (typeof data1 == "number") {
              }
              if (errors === _errs3) {
                if (typeof data1 === "string") {
                  if (!pattern8.test(data1)) {
                    validate7.errors = [
                      {
                        instancePath: instancePath + "/startedDateTime",
                        schemaPath: "#/properties/startedDateTime/pattern",
                        keyword: "pattern",
                        params: {
                          pattern:
                            "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))",
                        },
                        message:
                          'must match pattern "' +
                          "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))" +
                          '"',
                        schema:
                          "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))",
                        parentSchema: schema9.properties.startedDateTime,
                        data: data1,
                      },
                    ];
                    return false;
                  } else {
                    if (!formats0.validate(data1)) {
                      validate7.errors = [
                        {
                          instancePath: instancePath + "/startedDateTime",
                          schemaPath: "#/properties/startedDateTime/format",
                          keyword: "format",
                          params: { format: "date-time" },
                          message: 'must match format "' + "date-time" + '"',
                          schema: "date-time",
                          parentSchema: schema9.properties.startedDateTime,
                          data: data1,
                        },
                      ];
                      return false;
                    } else {
                    }
                  }
                } else {
                  validate7.errors = [
                    {
                      instancePath: instancePath + "/startedDateTime",
                      schemaPath: "#/properties/startedDateTime/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string",
                      schema: schema9.properties.startedDateTime.type,
                      parentSchema: schema9.properties.startedDateTime,
                      data: data1,
                    },
                  ];
                  return false;
                }
                if (errors === _errs3) {
                }
              }
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.time !== undefined) {
              const data2 = data.time;
              const _errs5 = errors;
              if (!(typeof data2 == "number")) {
                validate7.errors = [
                  {
                    instancePath: instancePath + "/time",
                    schemaPath: "#/properties/time/type",
                    keyword: "type",
                    params: { type: "number" },
                    message: "must be number",
                    schema: schema9.properties.time.type,
                    parentSchema: schema9.properties.time,
                    data: data2,
                  },
                ];
                return false;
              }
              const _errs6 = errors;
              if (errors === _errs5) {
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.request !== undefined) {
                const data3 = data.request;
                const _errs7 = errors;
                if (
                  !validate8(data3, {
                    instancePath: instancePath + "/request",
                    parentData: data,
                    parentDataProperty: "request",
                    rootData,
                  })
                ) {
                  vErrors = vErrors === null ? validate8.errors : vErrors.concat(validate8.errors);
                  errors = vErrors.length;
                } else {
                }
                var valid0 = _errs7 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.response !== undefined) {
                  const data4 = data.response;
                  const _errs8 = errors;
                  if (
                    !validate10(data4, {
                      instancePath: instancePath + "/response",
                      parentData: data,
                      parentDataProperty: "response",
                      rootData,
                    })
                  ) {
                    vErrors = vErrors === null ? validate10.errors : vErrors.concat(validate10.errors);
                    errors = vErrors.length;
                  } else {
                  }
                  var valid0 = _errs8 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.cache !== undefined) {
                    const data5 = data.cache;
                    const _errs9 = errors;
                    if (
                      !validate3(data5, {
                        instancePath: instancePath + "/cache",
                        parentData: data,
                        parentDataProperty: "cache",
                        rootData,
                      })
                    ) {
                      vErrors = vErrors === null ? validate3.errors : vErrors.concat(validate3.errors);
                      errors = vErrors.length;
                    } else {
                    }
                    var valid0 = _errs9 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.timings !== undefined) {
                      const data6 = data.timings;
                      const _errs10 = errors;
                      const _errs11 = errors;
                      if (data6 && typeof data6 == "object" && !Array.isArray(data6)) {
                        let missing1;
                        if (
                          (data6.send === undefined && (missing1 = "send")) ||
                          (data6.wait === undefined && (missing1 = "wait")) ||
                          (data6.receive === undefined && (missing1 = "receive"))
                        ) {
                          validate7.errors = [
                            {
                              instancePath: instancePath + "/timings",
                              schemaPath: "timings.json#/required",
                              keyword: "required",
                              params: { missingProperty: missing1 },
                              message: "must have required property '" + missing1 + "'",
                              schema: schema19.required,
                              parentSchema: schema19,
                              data: data6,
                            },
                          ];
                          return false;
                        } else {
                          if (data6.dns !== undefined) {
                            const data7 = data6.dns;
                            const _errs12 = errors;
                            if (!(typeof data7 == "number")) {
                              validate7.errors = [
                                {
                                  instancePath: instancePath + "/timings/dns",
                                  schemaPath: "timings.json#/properties/dns/type",
                                  keyword: "type",
                                  params: { type: "number" },
                                  message: "must be number",
                                  schema: schema19.properties.dns.type,
                                  parentSchema: schema19.properties.dns,
                                  data: data7,
                                },
                              ];
                              return false;
                            }
                            const _errs13 = errors;
                            if (errors === _errs12) {
                            }
                            var valid2 = _errs12 === errors;
                          } else {
                            var valid2 = true;
                          }
                          if (valid2) {
                            if (data6.connect !== undefined) {
                              const data8 = data6.connect;
                              const _errs14 = errors;
                              if (!(typeof data8 == "number")) {
                                validate7.errors = [
                                  {
                                    instancePath: instancePath + "/timings/connect",
                                    schemaPath: "timings.json#/properties/connect/type",
                                    keyword: "type",
                                    params: { type: "number" },
                                    message: "must be number",
                                    schema: schema19.properties.connect.type,
                                    parentSchema: schema19.properties.connect,
                                    data: data8,
                                  },
                                ];
                                return false;
                              }
                              const _errs15 = errors;
                              if (errors === _errs14) {
                              }
                              var valid2 = _errs14 === errors;
                            } else {
                              var valid2 = true;
                            }
                            if (valid2) {
                              if (data6.blocked !== undefined) {
                                const data9 = data6.blocked;
                                const _errs16 = errors;
                                if (!(typeof data9 == "number")) {
                                  validate7.errors = [
                                    {
                                      instancePath: instancePath + "/timings/blocked",
                                      schemaPath: "timings.json#/properties/blocked/type",
                                      keyword: "type",
                                      params: { type: "number" },
                                      message: "must be number",
                                      schema: schema19.properties.blocked.type,
                                      parentSchema: schema19.properties.blocked,
                                      data: data9,
                                    },
                                  ];
                                  return false;
                                }
                                const _errs17 = errors;
                                if (errors === _errs16) {
                                }
                                var valid2 = _errs16 === errors;
                              } else {
                                var valid2 = true;
                              }
                              if (valid2) {
                                if (data6.send !== undefined) {
                                  const data10 = data6.send;
                                  const _errs18 = errors;
                                  if (!(typeof data10 == "number")) {
                                    validate7.errors = [
                                      {
                                        instancePath: instancePath + "/timings/send",
                                        schemaPath: "timings.json#/properties/send/type",
                                        keyword: "type",
                                        params: { type: "number" },
                                        message: "must be number",
                                        schema: schema19.properties.send.type,
                                        parentSchema: schema19.properties.send,
                                        data: data10,
                                      },
                                    ];
                                    return false;
                                  }
                                  const _errs19 = errors;
                                  if (errors === _errs18) {
                                  }
                                  var valid2 = _errs18 === errors;
                                } else {
                                  var valid2 = true;
                                }
                                if (valid2) {
                                  if (data6.wait !== undefined) {
                                    const data11 = data6.wait;
                                    const _errs20 = errors;
                                    if (!(typeof data11 == "number")) {
                                      validate7.errors = [
                                        {
                                          instancePath: instancePath + "/timings/wait",
                                          schemaPath: "timings.json#/properties/wait/type",
                                          keyword: "type",
                                          params: { type: "number" },
                                          message: "must be number",
                                          schema: schema19.properties.wait.type,
                                          parentSchema: schema19.properties.wait,
                                          data: data11,
                                        },
                                      ];
                                      return false;
                                    }
                                    const _errs21 = errors;
                                    if (errors === _errs20) {
                                    }
                                    var valid2 = _errs20 === errors;
                                  } else {
                                    var valid2 = true;
                                  }
                                  if (valid2) {
                                    if (data6.receive !== undefined) {
                                      const data12 = data6.receive;
                                      const _errs22 = errors;
                                      if (!(typeof data12 == "number")) {
                                        validate7.errors = [
                                          {
                                            instancePath: instancePath + "/timings/receive",
                                            schemaPath: "timings.json#/properties/receive/type",
                                            keyword: "type",
                                            params: { type: "number" },
                                            message: "must be number",
                                            schema: schema19.properties.receive.type,
                                            parentSchema: schema19.properties.receive,
                                            data: data12,
                                          },
                                        ];
                                        return false;
                                      }
                                      const _errs23 = errors;
                                      if (errors === _errs22) {
                                      }
                                      var valid2 = _errs22 === errors;
                                    } else {
                                      var valid2 = true;
                                    }
                                    if (valid2) {
                                      if (data6.ssl !== undefined) {
                                        const data13 = data6.ssl;
                                        const _errs24 = errors;
                                        if (!(typeof data13 == "number")) {
                                          validate7.errors = [
                                            {
                                              instancePath: instancePath + "/timings/ssl",
                                              schemaPath: "timings.json#/properties/ssl/type",
                                              keyword: "type",
                                              params: { type: "number" },
                                              message: "must be number",
                                              schema: schema19.properties.ssl.type,
                                              parentSchema: schema19.properties.ssl,
                                              data: data13,
                                            },
                                          ];
                                          return false;
                                        }
                                        const _errs25 = errors;
                                        if (errors === _errs24) {
                                        }
                                        var valid2 = _errs24 === errors;
                                      } else {
                                        var valid2 = true;
                                      }
                                      if (valid2) {
                                        if (data6.comment !== undefined) {
                                          const data14 = data6.comment;
                                          const _errs26 = errors;
                                          if (typeof data14 !== "string") {
                                            validate7.errors = [
                                              {
                                                instancePath: instancePath + "/timings/comment",
                                                schemaPath: "timings.json#/properties/comment/type",
                                                keyword: "type",
                                                params: { type: "string" },
                                                message: "must be string",
                                                schema: schema19.properties.comment.type,
                                                parentSchema: schema19.properties.comment,
                                                data: data14,
                                              },
                                            ];
                                            return false;
                                          }
                                          const _errs27 = errors;
                                          if (errors === _errs26) {
                                          }
                                          var valid2 = _errs26 === errors;
                                        } else {
                                          var valid2 = true;
                                        }
                                        if (valid2) {
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      if (errors === _errs11) {
                      }
                      var valid1 = _errs11 === errors;
                      if (valid1) {
                      }
                      var valid0 = _errs10 === errors;
                    } else {
                      var valid0 = true;
                    }
                    if (valid0) {
                      if (data.serverIPAddress !== undefined) {
                        const data15 = data.serverIPAddress;
                        const _errs28 = errors;
                        if (typeof data15 !== "string") {
                          validate7.errors = [
                            {
                              instancePath: instancePath + "/serverIPAddress",
                              schemaPath: "#/properties/serverIPAddress/type",
                              keyword: "type",
                              params: { type: "string" },
                              message: "must be string",
                              schema: schema9.properties.serverIPAddress.type,
                              parentSchema: schema9.properties.serverIPAddress,
                              data: data15,
                            },
                          ];
                          return false;
                        }
                        const _errs29 = errors;
                        const _errs30 = errors;
                        let valid3 = false;
                        let passing0 = null;
                        const _errs31 = errors;
                        if (typeof data15 == "number") {
                        }
                        if (errors === _errs31) {
                          if (typeof data15 === "string") {
                            if (!formats10.test(data15)) {
                              const err0 = {
                                instancePath: instancePath + "/serverIPAddress",
                                schemaPath: "#/properties/serverIPAddress/oneOf/0/format",
                                keyword: "format",
                                params: { format: "ipv4" },
                                message: 'must match format "' + "ipv4" + '"',
                                schema: "ipv4",
                                parentSchema: schema9.properties.serverIPAddress.oneOf[0],
                                data: data15,
                              };
                              if (vErrors === null) {
                                vErrors = [err0];
                              } else {
                                vErrors.push(err0);
                              }
                              errors++;
                            } else {
                            }
                          }
                          if (errors === _errs31) {
                          }
                        }
                        var _valid0 = _errs31 === errors;
                        if (_valid0) {
                          valid3 = true;
                          passing0 = 0;
                        }
                        const _errs32 = errors;
                        if (typeof data15 == "number") {
                        }
                        if (errors === _errs32) {
                          if (typeof data15 === "string") {
                            if (!formats12.test(data15)) {
                              const err1 = {
                                instancePath: instancePath + "/serverIPAddress",
                                schemaPath: "#/properties/serverIPAddress/oneOf/1/format",
                                keyword: "format",
                                params: { format: "ipv6" },
                                message: 'must match format "' + "ipv6" + '"',
                                schema: "ipv6",
                                parentSchema: schema9.properties.serverIPAddress.oneOf[1],
                                data: data15,
                              };
                              if (vErrors === null) {
                                vErrors = [err1];
                              } else {
                                vErrors.push(err1);
                              }
                              errors++;
                            } else {
                            }
                          }
                          if (errors === _errs32) {
                          }
                        }
                        var _valid0 = _errs32 === errors;
                        if (_valid0 && valid3) {
                          valid3 = false;
                          passing0 = [passing0, 1];
                        } else {
                          if (_valid0) {
                            valid3 = true;
                            passing0 = 1;
                          }
                        }
                        if (!valid3) {
                          const err2 = {
                            instancePath: instancePath + "/serverIPAddress",
                            schemaPath: "#/properties/serverIPAddress/oneOf",
                            keyword: "oneOf",
                            params: { passingSchemas: passing0 },
                            message: "must match exactly one schema in oneOf",
                            schema: schema9.properties.serverIPAddress.oneOf,
                            parentSchema: schema9.properties.serverIPAddress,
                            data: data15,
                          };
                          if (vErrors === null) {
                            vErrors = [err2];
                          } else {
                            vErrors.push(err2);
                          }
                          errors++;
                          validate7.errors = vErrors;
                          return false;
                        } else {
                          errors = _errs30;
                          if (vErrors !== null) {
                            if (_errs30) {
                              vErrors.length = _errs30;
                            } else {
                              vErrors = null;
                            }
                          }
                        }
                        if (errors === _errs28) {
                        }
                        var valid0 = _errs28 === errors;
                      } else {
                        var valid0 = true;
                      }
                      if (valid0) {
                        if (data.connection !== undefined) {
                          const data16 = data.connection;
                          const _errs33 = errors;
                          if (typeof data16 !== "string") {
                            validate7.errors = [
                              {
                                instancePath: instancePath + "/connection",
                                schemaPath: "#/properties/connection/type",
                                keyword: "type",
                                params: { type: "string" },
                                message: "must be string",
                                schema: schema9.properties.connection.type,
                                parentSchema: schema9.properties.connection,
                                data: data16,
                              },
                            ];
                            return false;
                          }
                          const _errs34 = errors;
                          if (errors === _errs33) {
                          }
                          var valid0 = _errs33 === errors;
                        } else {
                          var valid0 = true;
                        }
                        if (valid0) {
                          if (data.comment !== undefined) {
                            const data17 = data.comment;
                            const _errs35 = errors;
                            if (typeof data17 !== "string") {
                              validate7.errors = [
                                {
                                  instancePath: instancePath + "/comment",
                                  schemaPath: "#/properties/comment/type",
                                  keyword: "type",
                                  params: { type: "string" },
                                  message: "must be string",
                                  schema: schema9.properties.comment.type,
                                  parentSchema: schema9.properties.comment,
                                  data: data17,
                                },
                              ];
                              return false;
                            }
                            const _errs36 = errors;
                            if (errors === _errs35) {
                            }
                            var valid0 = _errs35 === errors;
                          } else {
                            var valid0 = true;
                          }
                          if (valid0) {
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate7.errors = [
        {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
          schema: schema9.type,
          parentSchema: schema9,
          data,
        },
      ];
      return false;
    }
    if (errors === 0) {
    }
  }
  validate7.errors = vErrors;
  return errors === 0;
}

exports["har.json"] = validate13;
const schema20 = {
  $id: "har.json#",
  $schema: "http://json-schema.org/draft-06/schema#",
  type: "object",
  required: ["log"],
  properties: { log: { $ref: "log.json#" } },
};
const schema21 = {
  $id: "log.json#",
  $schema: "http://json-schema.org/draft-06/schema#",
  type: "object",
  required: ["version", "creator", "entries"],
  properties: {
    version: { type: "string" },
    creator: { $ref: "creator.json#" },
    browser: { $ref: "browser.json#" },
    pages: { type: "array", items: { $ref: "page.json#" } },
    entries: { type: "array", items: { $ref: "entry.json#" } },
    comment: { type: "string" },
  },
};
const schema24 = {
  $id: "page.json#",
  $schema: "http://json-schema.org/draft-06/schema#",
  type: "object",
  optional: true,
  required: ["startedDateTime", "id", "title", "pageTimings"],
  properties: {
    startedDateTime: {
      type: "string",
      format: "date-time",
      pattern:
        "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))",
    },
    id: { type: "string", unique: true },
    title: { type: "string" },
    pageTimings: { $ref: "pageTimings.json#" },
    comment: { type: "string" },
  },
};
const schema25 = {
  $id: "pageTimings.json#",
  $schema: "http://json-schema.org/draft-06/schema#",
  type: "object",
  properties: {
    onContentLoad: { type: "number", min: -1 },
    onLoad: { type: "number", min: -1 },
    comment: { type: "string" },
  },
};

function validate15(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="page.json#" */ const vErrors = null;
  const errors = 0;
  const _errs0 = errors;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (
        (data.startedDateTime === undefined && (missing0 = "startedDateTime")) ||
        (data.id === undefined && (missing0 = "id")) ||
        (data.title === undefined && (missing0 = "title")) ||
        (data.pageTimings === undefined && (missing0 = "pageTimings"))
      ) {
        validate15.errors = [
          {
            instancePath,
            schemaPath: "#/required",
            keyword: "required",
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
            schema: schema24.required,
            parentSchema: schema24,
            data,
          },
        ];
        return false;
      } else {
        if (data.startedDateTime !== undefined) {
          const data0 = data.startedDateTime;
          const _errs1 = errors;
          const _errs2 = errors;
          if (errors === _errs1) {
            if (typeof data0 == "number") {
            }
            if (errors === _errs1) {
              if (typeof data0 === "string") {
                if (!pattern8.test(data0)) {
                  validate15.errors = [
                    {
                      instancePath: instancePath + "/startedDateTime",
                      schemaPath: "#/properties/startedDateTime/pattern",
                      keyword: "pattern",
                      params: {
                        pattern:
                          "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))",
                      },
                      message:
                        'must match pattern "' +
                        "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))" +
                        '"',
                      schema:
                        "^(\\d{4})(-)?(\\d\\d)(-)?(\\d\\d)(T)?(\\d\\d)(:)?(\\d\\d)(:)?(\\d\\d)(\\.\\d+)?(Z|([+-])(\\d\\d)(:)?(\\d\\d))",
                      parentSchema: schema24.properties.startedDateTime,
                      data: data0,
                    },
                  ];
                  return false;
                } else {
                  if (!formats0.validate(data0)) {
                    validate15.errors = [
                      {
                        instancePath: instancePath + "/startedDateTime",
                        schemaPath: "#/properties/startedDateTime/format",
                        keyword: "format",
                        params: { format: "date-time" },
                        message: 'must match format "' + "date-time" + '"',
                        schema: "date-time",
                        parentSchema: schema24.properties.startedDateTime,
                        data: data0,
                      },
                    ];
                    return false;
                  } else {
                  }
                }
              } else {
                validate15.errors = [
                  {
                    instancePath: instancePath + "/startedDateTime",
                    schemaPath: "#/properties/startedDateTime/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string",
                    schema: schema24.properties.startedDateTime.type,
                    parentSchema: schema24.properties.startedDateTime,
                    data: data0,
                  },
                ];
                return false;
              }
              if (errors === _errs1) {
              }
            }
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.id !== undefined) {
            const data1 = data.id;
            const _errs3 = errors;
            if (typeof data1 !== "string") {
              validate15.errors = [
                {
                  instancePath: instancePath + "/id",
                  schemaPath: "#/properties/id/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                  schema: schema24.properties.id.type,
                  parentSchema: schema24.properties.id,
                  data: data1,
                },
              ];
              return false;
            }
            const _errs4 = errors;
            if (errors === _errs3) {
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.title !== undefined) {
              const data2 = data.title;
              const _errs5 = errors;
              if (typeof data2 !== "string") {
                validate15.errors = [
                  {
                    instancePath: instancePath + "/title",
                    schemaPath: "#/properties/title/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string",
                    schema: schema24.properties.title.type,
                    parentSchema: schema24.properties.title,
                    data: data2,
                  },
                ];
                return false;
              }
              const _errs6 = errors;
              if (errors === _errs5) {
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.pageTimings !== undefined) {
                const data3 = data.pageTimings;
                const _errs7 = errors;
                const _errs8 = errors;
                const _errs9 = errors;
                if (errors === _errs8) {
                  if (data3 && typeof data3 == "object" && !Array.isArray(data3)) {
                    if (data3.onContentLoad !== undefined) {
                      const data4 = data3.onContentLoad;
                      const _errs10 = errors;
                      if (!(typeof data4 == "number")) {
                        validate15.errors = [
                          {
                            instancePath: instancePath + "/pageTimings/onContentLoad",
                            schemaPath: "pageTimings.json#/properties/onContentLoad/type",
                            keyword: "type",
                            params: { type: "number" },
                            message: "must be number",
                            schema: schema25.properties.onContentLoad.type,
                            parentSchema: schema25.properties.onContentLoad,
                            data: data4,
                          },
                        ];
                        return false;
                      }
                      const _errs11 = errors;
                      if (errors === _errs10) {
                      }
                      var valid2 = _errs10 === errors;
                    } else {
                      var valid2 = true;
                    }
                    if (valid2) {
                      if (data3.onLoad !== undefined) {
                        const data5 = data3.onLoad;
                        const _errs12 = errors;
                        if (!(typeof data5 == "number")) {
                          validate15.errors = [
                            {
                              instancePath: instancePath + "/pageTimings/onLoad",
                              schemaPath: "pageTimings.json#/properties/onLoad/type",
                              keyword: "type",
                              params: { type: "number" },
                              message: "must be number",
                              schema: schema25.properties.onLoad.type,
                              parentSchema: schema25.properties.onLoad,
                              data: data5,
                            },
                          ];
                          return false;
                        }
                        const _errs13 = errors;
                        if (errors === _errs12) {
                        }
                        var valid2 = _errs12 === errors;
                      } else {
                        var valid2 = true;
                      }
                      if (valid2) {
                        if (data3.comment !== undefined) {
                          const data6 = data3.comment;
                          const _errs14 = errors;
                          if (typeof data6 !== "string") {
                            validate15.errors = [
                              {
                                instancePath: instancePath + "/pageTimings/comment",
                                schemaPath: "pageTimings.json#/properties/comment/type",
                                keyword: "type",
                                params: { type: "string" },
                                message: "must be string",
                                schema: schema25.properties.comment.type,
                                parentSchema: schema25.properties.comment,
                                data: data6,
                              },
                            ];
                            return false;
                          }
                          const _errs15 = errors;
                          if (errors === _errs14) {
                          }
                          var valid2 = _errs14 === errors;
                        } else {
                          var valid2 = true;
                        }
                        if (valid2) {
                        }
                      }
                    }
                  } else {
                    validate15.errors = [
                      {
                        instancePath: instancePath + "/pageTimings",
                        schemaPath: "pageTimings.json#/type",
                        keyword: "type",
                        params: { type: "object" },
                        message: "must be object",
                        schema: schema25.type,
                        parentSchema: schema25,
                        data: data3,
                      },
                    ];
                    return false;
                  }
                  if (errors === _errs8) {
                  }
                }
                var valid1 = _errs8 === errors;
                if (valid1) {
                }
                var valid0 = _errs7 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.comment !== undefined) {
                  const data7 = data.comment;
                  const _errs16 = errors;
                  if (typeof data7 !== "string") {
                    validate15.errors = [
                      {
                        instancePath: instancePath + "/comment",
                        schemaPath: "#/properties/comment/type",
                        keyword: "type",
                        params: { type: "string" },
                        message: "must be string",
                        schema: schema24.properties.comment.type,
                        parentSchema: schema24.properties.comment,
                        data: data7,
                      },
                    ];
                    return false;
                  }
                  const _errs17 = errors;
                  if (errors === _errs16) {
                  }
                  var valid0 = _errs16 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                }
              }
            }
          }
        }
      }
    } else {
      validate15.errors = [
        {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
          schema: schema24.type,
          parentSchema: schema24,
          data,
        },
      ];
      return false;
    }
    if (errors === 0) {
    }
  }
  validate15.errors = vErrors;
  return errors === 0;
}

function validate14(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="log.json#" */ let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (
        (data.version === undefined && (missing0 = "version")) ||
        (data.creator === undefined && (missing0 = "creator")) ||
        (data.entries === undefined && (missing0 = "entries"))
      ) {
        validate14.errors = [
          {
            instancePath,
            schemaPath: "#/required",
            keyword: "required",
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
            schema: schema21.required,
            parentSchema: schema21,
            data,
          },
        ];
        return false;
      } else {
        if (data.version !== undefined) {
          const data0 = data.version;
          const _errs1 = errors;
          if (typeof data0 !== "string") {
            validate14.errors = [
              {
                instancePath: instancePath + "/version",
                schemaPath: "#/properties/version/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
                schema: schema21.properties.version.type,
                parentSchema: schema21.properties.version,
                data: data0,
              },
            ];
            return false;
          }
          const _errs2 = errors;
          if (errors === _errs1) {
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.creator !== undefined) {
            const data1 = data.creator;
            const _errs3 = errors;
            const _errs4 = errors;
            const _errs5 = errors;
            if (errors === _errs4) {
              if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
                let missing1;
                if (
                  (data1.name === undefined && (missing1 = "name")) ||
                  (data1.version === undefined && (missing1 = "version"))
                ) {
                  validate14.errors = [
                    {
                      instancePath: instancePath + "/creator",
                      schemaPath: "creator.json#/required",
                      keyword: "required",
                      params: { missingProperty: missing1 },
                      message: "must have required property '" + missing1 + "'",
                      schema: schema8.required,
                      parentSchema: schema8,
                      data: data1,
                    },
                  ];
                  return false;
                } else {
                  if (data1.name !== undefined) {
                    const data2 = data1.name;
                    const _errs6 = errors;
                    if (typeof data2 !== "string") {
                      validate14.errors = [
                        {
                          instancePath: instancePath + "/creator/name",
                          schemaPath: "creator.json#/properties/name/type",
                          keyword: "type",
                          params: { type: "string" },
                          message: "must be string",
                          schema: schema8.properties.name.type,
                          parentSchema: schema8.properties.name,
                          data: data2,
                        },
                      ];
                      return false;
                    }
                    const _errs7 = errors;
                    if (errors === _errs6) {
                    }
                    var valid2 = _errs6 === errors;
                  } else {
                    var valid2 = true;
                  }
                  if (valid2) {
                    if (data1.version !== undefined) {
                      const data3 = data1.version;
                      const _errs8 = errors;
                      if (typeof data3 !== "string") {
                        validate14.errors = [
                          {
                            instancePath: instancePath + "/creator/version",
                            schemaPath: "creator.json#/properties/version/type",
                            keyword: "type",
                            params: { type: "string" },
                            message: "must be string",
                            schema: schema8.properties.version.type,
                            parentSchema: schema8.properties.version,
                            data: data3,
                          },
                        ];
                        return false;
                      }
                      const _errs9 = errors;
                      if (errors === _errs8) {
                      }
                      var valid2 = _errs8 === errors;
                    } else {
                      var valid2 = true;
                    }
                    if (valid2) {
                      if (data1.comment !== undefined) {
                        const data4 = data1.comment;
                        const _errs10 = errors;
                        if (typeof data4 !== "string") {
                          validate14.errors = [
                            {
                              instancePath: instancePath + "/creator/comment",
                              schemaPath: "creator.json#/properties/comment/type",
                              keyword: "type",
                              params: { type: "string" },
                              message: "must be string",
                              schema: schema8.properties.comment.type,
                              parentSchema: schema8.properties.comment,
                              data: data4,
                            },
                          ];
                          return false;
                        }
                        const _errs11 = errors;
                        if (errors === _errs10) {
                        }
                        var valid2 = _errs10 === errors;
                      } else {
                        var valid2 = true;
                      }
                      if (valid2) {
                      }
                    }
                  }
                }
              } else {
                validate14.errors = [
                  {
                    instancePath: instancePath + "/creator",
                    schemaPath: "creator.json#/type",
                    keyword: "type",
                    params: { type: "object" },
                    message: "must be object",
                    schema: schema8.type,
                    parentSchema: schema8,
                    data: data1,
                  },
                ];
                return false;
              }
              if (errors === _errs4) {
              }
            }
            var valid1 = _errs4 === errors;
            if (valid1) {
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.browser !== undefined) {
              const data5 = data.browser;
              const _errs12 = errors;
              const _errs13 = errors;
              const _errs14 = errors;
              if (errors === _errs13) {
                if (data5 && typeof data5 == "object" && !Array.isArray(data5)) {
                  let missing2;
                  if (
                    (data5.name === undefined && (missing2 = "name")) ||
                    (data5.version === undefined && (missing2 = "version"))
                  ) {
                    validate14.errors = [
                      {
                        instancePath: instancePath + "/browser",
                        schemaPath: "browser.json#/required",
                        keyword: "required",
                        params: { missingProperty: missing2 },
                        message: "must have required property '" + missing2 + "'",
                        schema: schema2.required,
                        parentSchema: schema2,
                        data: data5,
                      },
                    ];
                    return false;
                  } else {
                    if (data5.name !== undefined) {
                      const data6 = data5.name;
                      const _errs15 = errors;
                      if (typeof data6 !== "string") {
                        validate14.errors = [
                          {
                            instancePath: instancePath + "/browser/name",
                            schemaPath: "browser.json#/properties/name/type",
                            keyword: "type",
                            params: { type: "string" },
                            message: "must be string",
                            schema: schema2.properties.name.type,
                            parentSchema: schema2.properties.name,
                            data: data6,
                          },
                        ];
                        return false;
                      }
                      const _errs16 = errors;
                      if (errors === _errs15) {
                      }
                      var valid4 = _errs15 === errors;
                    } else {
                      var valid4 = true;
                    }
                    if (valid4) {
                      if (data5.version !== undefined) {
                        const data7 = data5.version;
                        const _errs17 = errors;
                        if (typeof data7 !== "string") {
                          validate14.errors = [
                            {
                              instancePath: instancePath + "/browser/version",
                              schemaPath: "browser.json#/properties/version/type",
                              keyword: "type",
                              params: { type: "string" },
                              message: "must be string",
                              schema: schema2.properties.version.type,
                              parentSchema: schema2.properties.version,
                              data: data7,
                            },
                          ];
                          return false;
                        }
                        const _errs18 = errors;
                        if (errors === _errs17) {
                        }
                        var valid4 = _errs17 === errors;
                      } else {
                        var valid4 = true;
                      }
                      if (valid4) {
                        if (data5.comment !== undefined) {
                          const data8 = data5.comment;
                          const _errs19 = errors;
                          if (typeof data8 !== "string") {
                            validate14.errors = [
                              {
                                instancePath: instancePath + "/browser/comment",
                                schemaPath: "browser.json#/properties/comment/type",
                                keyword: "type",
                                params: { type: "string" },
                                message: "must be string",
                                schema: schema2.properties.comment.type,
                                parentSchema: schema2.properties.comment,
                                data: data8,
                              },
                            ];
                            return false;
                          }
                          const _errs20 = errors;
                          if (errors === _errs19) {
                          }
                          var valid4 = _errs19 === errors;
                        } else {
                          var valid4 = true;
                        }
                        if (valid4) {
                        }
                      }
                    }
                  }
                } else {
                  validate14.errors = [
                    {
                      instancePath: instancePath + "/browser",
                      schemaPath: "browser.json#/type",
                      keyword: "type",
                      params: { type: "object" },
                      message: "must be object",
                      schema: schema2.type,
                      parentSchema: schema2,
                      data: data5,
                    },
                  ];
                  return false;
                }
                if (errors === _errs13) {
                }
              }
              var valid3 = _errs13 === errors;
              if (valid3) {
              }
              var valid0 = _errs12 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.pages !== undefined) {
                const data9 = data.pages;
                const _errs21 = errors;
                const _errs22 = errors;
                if (errors === _errs21) {
                  if (Array.isArray(data9)) {
                    var valid5 = true;
                    const len0 = data9.length;
                    for (let i0 = 0; i0 < len0; i0++) {
                      const data10 = data9[i0];
                      const _errs23 = errors;
                      if (
                        !validate15(data10, {
                          instancePath: instancePath + "/pages/" + i0,
                          parentData: data9,
                          parentDataProperty: i0,
                          rootData,
                        })
                      ) {
                        vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
                        errors = vErrors.length;
                      } else {
                      }
                      var valid5 = _errs23 === errors;
                      if (!valid5) {
                        break;
                      }
                    }
                    if (valid5) {
                    }
                  } else {
                    validate14.errors = [
                      {
                        instancePath: instancePath + "/pages",
                        schemaPath: "#/properties/pages/type",
                        keyword: "type",
                        params: { type: "array" },
                        message: "must be array",
                        schema: schema21.properties.pages.type,
                        parentSchema: schema21.properties.pages,
                        data: data9,
                      },
                    ];
                    return false;
                  }
                  if (errors === _errs21) {
                  }
                }
                var valid0 = _errs21 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.entries !== undefined) {
                  const data11 = data.entries;
                  const _errs24 = errors;
                  const _errs25 = errors;
                  if (errors === _errs24) {
                    if (Array.isArray(data11)) {
                      var valid6 = true;
                      const len1 = data11.length;
                      for (let i1 = 0; i1 < len1; i1++) {
                        const data12 = data11[i1];
                        const _errs26 = errors;
                        if (
                          !validate7(data12, {
                            instancePath: instancePath + "/entries/" + i1,
                            parentData: data11,
                            parentDataProperty: i1,
                            rootData,
                          })
                        ) {
                          vErrors = vErrors === null ? validate7.errors : vErrors.concat(validate7.errors);
                          errors = vErrors.length;
                        } else {
                        }
                        var valid6 = _errs26 === errors;
                        if (!valid6) {
                          break;
                        }
                      }
                      if (valid6) {
                      }
                    } else {
                      validate14.errors = [
                        {
                          instancePath: instancePath + "/entries",
                          schemaPath: "#/properties/entries/type",
                          keyword: "type",
                          params: { type: "array" },
                          message: "must be array",
                          schema: schema21.properties.entries.type,
                          parentSchema: schema21.properties.entries,
                          data: data11,
                        },
                      ];
                      return false;
                    }
                    if (errors === _errs24) {
                    }
                  }
                  var valid0 = _errs24 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.comment !== undefined) {
                    const data13 = data.comment;
                    const _errs27 = errors;
                    if (typeof data13 !== "string") {
                      validate14.errors = [
                        {
                          instancePath: instancePath + "/comment",
                          schemaPath: "#/properties/comment/type",
                          keyword: "type",
                          params: { type: "string" },
                          message: "must be string",
                          schema: schema21.properties.comment.type,
                          parentSchema: schema21.properties.comment,
                          data: data13,
                        },
                      ];
                      return false;
                    }
                    const _errs28 = errors;
                    if (errors === _errs27) {
                    }
                    var valid0 = _errs27 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate14.errors = [
        {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
          schema: schema21.type,
          parentSchema: schema21,
          data,
        },
      ];
      return false;
    }
    if (errors === 0) {
    }
  }
  validate14.errors = vErrors;
  return errors === 0;
}

function validate13(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="har.json#" */ let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.log === undefined && (missing0 = "log")) {
        validate13.errors = [
          {
            instancePath,
            schemaPath: "#/required",
            keyword: "required",
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
            schema: schema20.required,
            parentSchema: schema20,
            data,
          },
        ];
        return false;
      } else {
        if (data.log !== undefined) {
          const data0 = data.log;
          const _errs1 = errors;
          if (
            !validate14(data0, {
              instancePath: instancePath + "/log",
              parentData: data,
              parentDataProperty: "log",
              rootData,
            })
          ) {
            vErrors = vErrors === null ? validate14.errors : vErrors.concat(validate14.errors);
            errors = vErrors.length;
          } else {
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
        }
      }
    } else {
      validate13.errors = [
        {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
          schema: schema20.type,
          parentSchema: schema20,
          data,
        },
      ];
      return false;
    }
    if (errors === 0) {
    }
  }
  validate13.errors = vErrors;
  return errors === 0;
}

exports["header.json"] = validate19;

function validate19(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="header.json#" */ const vErrors = null;
  const errors = 0;
  const _errs0 = errors;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if ((data.name === undefined && (missing0 = "name")) || (data.value === undefined && (missing0 = "value"))) {
        validate19.errors = [
          {
            instancePath,
            schemaPath: "#/required",
            keyword: "required",
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
            schema: schema12.required,
            parentSchema: schema12,
            data,
          },
        ];
        return false;
      } else {
        if (data.name !== undefined) {
          const data0 = data.name;
          const _errs1 = errors;
          if (typeof data0 !== "string") {
            validate19.errors = [
              {
                instancePath: instancePath + "/name",
                schemaPath: "#/properties/name/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
                schema: schema12.properties.name.type,
                parentSchema: schema12.properties.name,
                data: data0,
              },
            ];
            return false;
          }
          const _errs2 = errors;
          if (errors === _errs1) {
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.value !== undefined) {
            const data1 = data.value;
            const _errs3 = errors;
            if (typeof data1 !== "string") {
              validate19.errors = [
                {
                  instancePath: instancePath + "/value",
                  schemaPath: "#/properties/value/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                  schema: schema12.properties.value.type,
                  parentSchema: schema12.properties.value,
                  data: data1,
                },
              ];
              return false;
            }
            const _errs4 = errors;
            if (errors === _errs3) {
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.comment !== undefined) {
              const data2 = data.comment;
              const _errs5 = errors;
              if (typeof data2 !== "string") {
                validate19.errors = [
                  {
                    instancePath: instancePath + "/comment",
                    schemaPath: "#/properties/comment/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string",
                    schema: schema12.properties.comment.type,
                    parentSchema: schema12.properties.comment,
                    data: data2,
                  },
                ];
                return false;
              }
              const _errs6 = errors;
              if (errors === _errs5) {
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
            }
          }
        }
      }
    } else {
      validate19.errors = [
        {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
          schema: schema12.type,
          parentSchema: schema12,
          data,
        },
      ];
      return false;
    }
    if (errors === 0) {
    }
  }
  validate19.errors = vErrors;
  return errors === 0;
}

exports["log.json"] = validate14;

exports["page.json"] = validate15;

exports["pageTimings.json"] = validate20;

function validate20(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="pageTimings.json#" */ const vErrors = null;
  const errors = 0;
  const _errs0 = errors;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      if (data.onContentLoad !== undefined) {
        const data0 = data.onContentLoad;
        const _errs1 = errors;
        if (!(typeof data0 == "number")) {
          validate20.errors = [
            {
              instancePath: instancePath + "/onContentLoad",
              schemaPath: "#/properties/onContentLoad/type",
              keyword: "type",
              params: { type: "number" },
              message: "must be number",
              schema: schema25.properties.onContentLoad.type,
              parentSchema: schema25.properties.onContentLoad,
              data: data0,
            },
          ];
          return false;
        }
        const _errs2 = errors;
        if (errors === _errs1) {
        }
        var valid0 = _errs1 === errors;
      } else {
        var valid0 = true;
      }
      if (valid0) {
        if (data.onLoad !== undefined) {
          const data1 = data.onLoad;
          const _errs3 = errors;
          if (!(typeof data1 == "number")) {
            validate20.errors = [
              {
                instancePath: instancePath + "/onLoad",
                schemaPath: "#/properties/onLoad/type",
                keyword: "type",
                params: { type: "number" },
                message: "must be number",
                schema: schema25.properties.onLoad.type,
                parentSchema: schema25.properties.onLoad,
                data: data1,
              },
            ];
            return false;
          }
          const _errs4 = errors;
          if (errors === _errs3) {
          }
          var valid0 = _errs3 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.comment !== undefined) {
            const data2 = data.comment;
            const _errs5 = errors;
            if (typeof data2 !== "string") {
              validate20.errors = [
                {
                  instancePath: instancePath + "/comment",
                  schemaPath: "#/properties/comment/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                  schema: schema25.properties.comment.type,
                  parentSchema: schema25.properties.comment,
                  data: data2,
                },
              ];
              return false;
            }
            const _errs6 = errors;
            if (errors === _errs5) {
            }
            var valid0 = _errs5 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
          }
        }
      }
    } else {
      validate20.errors = [
        {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
          schema: schema25.type,
          parentSchema: schema25,
          data,
        },
      ];
      return false;
    }
    if (errors === 0) {
    }
  }
  validate20.errors = vErrors;
  return errors === 0;
}

exports["postData.json"] = validate21;

function validate21(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="postData.json#" */ const vErrors = null;
  const errors = 0;
  const _errs0 = errors;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.mimeType === undefined && (missing0 = "mimeType")) {
        validate21.errors = [
          {
            instancePath,
            schemaPath: "#/required",
            keyword: "required",
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
            schema: schema14.required,
            parentSchema: schema14,
            data,
          },
        ];
        return false;
      } else {
        if (data.mimeType !== undefined) {
          const data0 = data.mimeType;
          const _errs1 = errors;
          if (typeof data0 !== "string") {
            validate21.errors = [
              {
                instancePath: instancePath + "/mimeType",
                schemaPath: "#/properties/mimeType/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
                schema: schema14.properties.mimeType.type,
                parentSchema: schema14.properties.mimeType,
                data: data0,
              },
            ];
            return false;
          }
          const _errs2 = errors;
          if (errors === _errs1) {
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.text !== undefined) {
            const data1 = data.text;
            const _errs3 = errors;
            if (typeof data1 !== "string") {
              validate21.errors = [
                {
                  instancePath: instancePath + "/text",
                  schemaPath: "#/properties/text/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                  schema: schema14.properties.text.type,
                  parentSchema: schema14.properties.text,
                  data: data1,
                },
              ];
              return false;
            }
            const _errs4 = errors;
            if (errors === _errs3) {
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.params !== undefined) {
              const data2 = data.params;
              const _errs5 = errors;
              if (!Array.isArray(data2)) {
                validate21.errors = [
                  {
                    instancePath: instancePath + "/params",
                    schemaPath: "#/properties/params/type",
                    keyword: "type",
                    params: { type: "array" },
                    message: "must be array",
                    schema: schema14.properties.params.type,
                    parentSchema: schema14.properties.params,
                    data: data2,
                  },
                ];
                return false;
              }
              const _errs6 = errors;
              if (errors === _errs5) {
                if (data2 && typeof data2 == "object" && !Array.isArray(data2)) {
                  let missing1;
                  if (data2.name === undefined && (missing1 = "name")) {
                    validate21.errors = [
                      {
                        instancePath: instancePath + "/params",
                        schemaPath: "#/properties/params/required",
                        keyword: "required",
                        params: { missingProperty: missing1 },
                        message: "must have required property '" + missing1 + "'",
                        schema: schema14.properties.params.required,
                        parentSchema: schema14.properties.params,
                        data: data2,
                      },
                    ];
                    return false;
                  } else {
                    if (data2.name !== undefined) {
                      const data3 = data2.name;
                      const _errs7 = errors;
                      if (typeof data3 !== "string") {
                        validate21.errors = [
                          {
                            instancePath: instancePath + "/params/name",
                            schemaPath: "#/properties/params/properties/name/type",
                            keyword: "type",
                            params: { type: "string" },
                            message: "must be string",
                            schema: schema14.properties.params.properties.name.type,
                            parentSchema: schema14.properties.params.properties.name,
                            data: data3,
                          },
                        ];
                        return false;
                      }
                      const _errs8 = errors;
                      if (errors === _errs7) {
                      }
                      var valid1 = _errs7 === errors;
                    } else {
                      var valid1 = true;
                    }
                    if (valid1) {
                      if (data2.value !== undefined) {
                        const data4 = data2.value;
                        const _errs9 = errors;
                        if (typeof data4 !== "string") {
                          validate21.errors = [
                            {
                              instancePath: instancePath + "/params/value",
                              schemaPath: "#/properties/params/properties/value/type",
                              keyword: "type",
                              params: { type: "string" },
                              message: "must be string",
                              schema: schema14.properties.params.properties.value.type,
                              parentSchema: schema14.properties.params.properties.value,
                              data: data4,
                            },
                          ];
                          return false;
                        }
                        const _errs10 = errors;
                        if (errors === _errs9) {
                        }
                        var valid1 = _errs9 === errors;
                      } else {
                        var valid1 = true;
                      }
                      if (valid1) {
                        if (data2.fileName !== undefined) {
                          const data5 = data2.fileName;
                          const _errs11 = errors;
                          if (typeof data5 !== "string") {
                            validate21.errors = [
                              {
                                instancePath: instancePath + "/params/fileName",
                                schemaPath: "#/properties/params/properties/fileName/type",
                                keyword: "type",
                                params: { type: "string" },
                                message: "must be string",
                                schema: schema14.properties.params.properties.fileName.type,
                                parentSchema: schema14.properties.params.properties.fileName,
                                data: data5,
                              },
                            ];
                            return false;
                          }
                          const _errs12 = errors;
                          if (errors === _errs11) {
                          }
                          var valid1 = _errs11 === errors;
                        } else {
                          var valid1 = true;
                        }
                        if (valid1) {
                          if (data2.contentType !== undefined) {
                            const data6 = data2.contentType;
                            const _errs13 = errors;
                            if (typeof data6 !== "string") {
                              validate21.errors = [
                                {
                                  instancePath: instancePath + "/params/contentType",
                                  schemaPath: "#/properties/params/properties/contentType/type",
                                  keyword: "type",
                                  params: { type: "string" },
                                  message: "must be string",
                                  schema: schema14.properties.params.properties.contentType.type,
                                  parentSchema: schema14.properties.params.properties.contentType,
                                  data: data6,
                                },
                              ];
                              return false;
                            }
                            const _errs14 = errors;
                            if (errors === _errs13) {
                            }
                            var valid1 = _errs13 === errors;
                          } else {
                            var valid1 = true;
                          }
                          if (valid1) {
                            if (data2.comment !== undefined) {
                              const data7 = data2.comment;
                              const _errs15 = errors;
                              if (typeof data7 !== "string") {
                                validate21.errors = [
                                  {
                                    instancePath: instancePath + "/params/comment",
                                    schemaPath: "#/properties/params/properties/comment/type",
                                    keyword: "type",
                                    params: { type: "string" },
                                    message: "must be string",
                                    schema: schema14.properties.params.properties.comment.type,
                                    parentSchema: schema14.properties.params.properties.comment,
                                    data: data7,
                                  },
                                ];
                                return false;
                              }
                              const _errs16 = errors;
                              if (errors === _errs15) {
                              }
                              var valid1 = _errs15 === errors;
                            } else {
                              var valid1 = true;
                            }
                            if (valid1) {
                            }
                          }
                        }
                      }
                    }
                  }
                }
                if (errors === _errs5) {
                }
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.comment !== undefined) {
                const data8 = data.comment;
                const _errs17 = errors;
                if (typeof data8 !== "string") {
                  validate21.errors = [
                    {
                      instancePath: instancePath + "/comment",
                      schemaPath: "#/properties/comment/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string",
                      schema: schema14.properties.comment.type,
                      parentSchema: schema14.properties.comment,
                      data: data8,
                    },
                  ];
                  return false;
                }
                const _errs18 = errors;
                if (errors === _errs17) {
                }
                var valid0 = _errs17 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
              }
            }
          }
        }
      }
    } else {
      validate21.errors = [
        {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
          schema: schema14.type,
          parentSchema: schema14,
          data,
        },
      ];
      return false;
    }
    if (errors === 0) {
    }
  }
  validate21.errors = vErrors;
  return errors === 0;
}

exports["query.json"] = validate22;

function validate22(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="query.json#" */ const vErrors = null;
  const errors = 0;
  const _errs0 = errors;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if ((data.name === undefined && (missing0 = "name")) || (data.value === undefined && (missing0 = "value"))) {
        validate22.errors = [
          {
            instancePath,
            schemaPath: "#/required",
            keyword: "required",
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
            schema: schema13.required,
            parentSchema: schema13,
            data,
          },
        ];
        return false;
      } else {
        if (data.name !== undefined) {
          const data0 = data.name;
          const _errs1 = errors;
          if (typeof data0 !== "string") {
            validate22.errors = [
              {
                instancePath: instancePath + "/name",
                schemaPath: "#/properties/name/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string",
                schema: schema13.properties.name.type,
                parentSchema: schema13.properties.name,
                data: data0,
              },
            ];
            return false;
          }
          const _errs2 = errors;
          if (errors === _errs1) {
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.value !== undefined) {
            const data1 = data.value;
            const _errs3 = errors;
            if (typeof data1 !== "string") {
              validate22.errors = [
                {
                  instancePath: instancePath + "/value",
                  schemaPath: "#/properties/value/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                  schema: schema13.properties.value.type,
                  parentSchema: schema13.properties.value,
                  data: data1,
                },
              ];
              return false;
            }
            const _errs4 = errors;
            if (errors === _errs3) {
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.comment !== undefined) {
              const data2 = data.comment;
              const _errs5 = errors;
              if (typeof data2 !== "string") {
                validate22.errors = [
                  {
                    instancePath: instancePath + "/comment",
                    schemaPath: "#/properties/comment/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string",
                    schema: schema13.properties.comment.type,
                    parentSchema: schema13.properties.comment,
                    data: data2,
                  },
                ];
                return false;
              }
              const _errs6 = errors;
              if (errors === _errs5) {
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
            }
          }
        }
      }
    } else {
      validate22.errors = [
        {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
          schema: schema13.type,
          parentSchema: schema13,
          data,
        },
      ];
      return false;
    }
    if (errors === 0) {
    }
  }
  validate22.errors = vErrors;
  return errors === 0;
}

exports["request.json"] = validate8;

exports["response.json"] = validate10;

exports["timings.json"] = validate23;

function validate23(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="timings.json#" */ const vErrors = null;
  const errors = 0;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    let missing0;
    if (
      (data.send === undefined && (missing0 = "send")) ||
      (data.wait === undefined && (missing0 = "wait")) ||
      (data.receive === undefined && (missing0 = "receive"))
    ) {
      validate23.errors = [
        {
          instancePath,
          schemaPath: "#/required",
          keyword: "required",
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
          schema: schema19.required,
          parentSchema: schema19,
          data,
        },
      ];
      return false;
    } else {
      if (data.dns !== undefined) {
        const data0 = data.dns;
        const _errs0 = errors;
        if (!(typeof data0 == "number")) {
          validate23.errors = [
            {
              instancePath: instancePath + "/dns",
              schemaPath: "#/properties/dns/type",
              keyword: "type",
              params: { type: "number" },
              message: "must be number",
              schema: schema19.properties.dns.type,
              parentSchema: schema19.properties.dns,
              data: data0,
            },
          ];
          return false;
        }
        const _errs1 = errors;
        if (errors === _errs0) {
        }
        var valid0 = _errs0 === errors;
      } else {
        var valid0 = true;
      }
      if (valid0) {
        if (data.connect !== undefined) {
          const data1 = data.connect;
          const _errs2 = errors;
          if (!(typeof data1 == "number")) {
            validate23.errors = [
              {
                instancePath: instancePath + "/connect",
                schemaPath: "#/properties/connect/type",
                keyword: "type",
                params: { type: "number" },
                message: "must be number",
                schema: schema19.properties.connect.type,
                parentSchema: schema19.properties.connect,
                data: data1,
              },
            ];
            return false;
          }
          const _errs3 = errors;
          if (errors === _errs2) {
          }
          var valid0 = _errs2 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.blocked !== undefined) {
            const data2 = data.blocked;
            const _errs4 = errors;
            if (!(typeof data2 == "number")) {
              validate23.errors = [
                {
                  instancePath: instancePath + "/blocked",
                  schemaPath: "#/properties/blocked/type",
                  keyword: "type",
                  params: { type: "number" },
                  message: "must be number",
                  schema: schema19.properties.blocked.type,
                  parentSchema: schema19.properties.blocked,
                  data: data2,
                },
              ];
              return false;
            }
            const _errs5 = errors;
            if (errors === _errs4) {
            }
            var valid0 = _errs4 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.send !== undefined) {
              const data3 = data.send;
              const _errs6 = errors;
              if (!(typeof data3 == "number")) {
                validate23.errors = [
                  {
                    instancePath: instancePath + "/send",
                    schemaPath: "#/properties/send/type",
                    keyword: "type",
                    params: { type: "number" },
                    message: "must be number",
                    schema: schema19.properties.send.type,
                    parentSchema: schema19.properties.send,
                    data: data3,
                  },
                ];
                return false;
              }
              const _errs7 = errors;
              if (errors === _errs6) {
              }
              var valid0 = _errs6 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.wait !== undefined) {
                const data4 = data.wait;
                const _errs8 = errors;
                if (!(typeof data4 == "number")) {
                  validate23.errors = [
                    {
                      instancePath: instancePath + "/wait",
                      schemaPath: "#/properties/wait/type",
                      keyword: "type",
                      params: { type: "number" },
                      message: "must be number",
                      schema: schema19.properties.wait.type,
                      parentSchema: schema19.properties.wait,
                      data: data4,
                    },
                  ];
                  return false;
                }
                const _errs9 = errors;
                if (errors === _errs8) {
                }
                var valid0 = _errs8 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.receive !== undefined) {
                  const data5 = data.receive;
                  const _errs10 = errors;
                  if (!(typeof data5 == "number")) {
                    validate23.errors = [
                      {
                        instancePath: instancePath + "/receive",
                        schemaPath: "#/properties/receive/type",
                        keyword: "type",
                        params: { type: "number" },
                        message: "must be number",
                        schema: schema19.properties.receive.type,
                        parentSchema: schema19.properties.receive,
                        data: data5,
                      },
                    ];
                    return false;
                  }
                  const _errs11 = errors;
                  if (errors === _errs10) {
                  }
                  var valid0 = _errs10 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.ssl !== undefined) {
                    const data6 = data.ssl;
                    const _errs12 = errors;
                    if (!(typeof data6 == "number")) {
                      validate23.errors = [
                        {
                          instancePath: instancePath + "/ssl",
                          schemaPath: "#/properties/ssl/type",
                          keyword: "type",
                          params: { type: "number" },
                          message: "must be number",
                          schema: schema19.properties.ssl.type,
                          parentSchema: schema19.properties.ssl,
                          data: data6,
                        },
                      ];
                      return false;
                    }
                    const _errs13 = errors;
                    if (errors === _errs12) {
                    }
                    var valid0 = _errs12 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.comment !== undefined) {
                      const data7 = data.comment;
                      const _errs14 = errors;
                      if (typeof data7 !== "string") {
                        validate23.errors = [
                          {
                            instancePath: instancePath + "/comment",
                            schemaPath: "#/properties/comment/type",
                            keyword: "type",
                            params: { type: "string" },
                            message: "must be string",
                            schema: schema19.properties.comment.type,
                            parentSchema: schema19.properties.comment,
                            data: data7,
                          },
                        ];
                        return false;
                      }
                      const _errs15 = errors;
                      if (errors === _errs14) {
                      }
                      var valid0 = _errs14 === errors;
                    } else {
                      var valid0 = true;
                    }
                    if (valid0) {
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (errors === 0) {
  }
  validate23.errors = vErrors;
  return errors === 0;
}
