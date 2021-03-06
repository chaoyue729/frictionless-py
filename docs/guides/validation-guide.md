---
title: Validation Guide
---

> This guide assumes basic familiarity with the Frictionless Framework. To learn more, please read the [Introduction](https://framework.frictionlessdata.io/docs/guides/introduction) and [Quick Start](https://framework.frictionlessdata.io/docs/guides/quick-start)

Tabular data validation is a process of identifying tabular problems that have occured in your data so you can correct them. Let's explore how Frictionless helps to achieve this task using an invalid data table example:

> Download [`capital-invalid.csv`](https://raw.githubusercontent.com/frictionlessdata/frictionless-py/master/data/capital-invalid.csv) and put into the `data` folder to reproduce the examples

```bash title="CLI"
cat data/capital-invalid.csv
```
```csv title="data/capital-valid.csv"
id,name,name
1,London,Britain
2,Berlin,Germany
3,Paris,France
4,Madrid,Spain
5,Rome,Italy
6,Zagreb,Croatia
7,Athens,Greece
8,Vienna,Austria
8,Warsaw

x,Tokio,Japan,review
```

We can validate this file by using the command-line interface. Frictionless provides comprehensive error details so the error should be self-explanatory. Continue reading to learn the validation process in detail.

```bash title="CLI"
frictionless validate data/capital-invalid.csv
```
```
---
invalid: data/capital-invalid.csv
---

====  =====  ================  ====================================================================================================================
row   field  code              message
====  =====  ================  ====================================================================================================================
None      3  duplicate-header  Header "name" in field at position "3" is duplicated to header in another field: at position "2"
  10      3  missing-cell      Row at position "10" has a missing cell in field "name2" at position "3"
  11  None   blank-row         Row at position "11" is completely blank
  12      4  extra-cell        Row at position "12" has an extra value in field at position "4"
  12      1  type-error        The cell "x" in row at position "12" and field "id" at position "1" has incompatible type: type is "integer/default"
====  =====  ================  ====================================================================================================================
```

## Validate Functions

The high-level interface for validating data provided by Frictionless is a set of `validate` functions:
- `validate`: detects the source type and validates data accordingly
- `validate_schema`: validates a schema's metadata
- `validate_resource`: validates a resource's data and metadata
- `validate_package`: validates a package's data and metadata
- `validate_inquiry`: validates a special `Inquery` object which represents a validation task instruction

In the command-line, there is only 1 command but there is a flag to adjust the behavior:

```bash title="CLI"
frictionless validate
frictionless validate --type schema
frictionless validate --type resource
frictionless validate --type package
frictionless validate --type inquiry
```

## Validating Schema

The `validate_schema` function is the only function validating solely metadata. To see this work, let's create a invalid table schema:

```python title="Python"
from frictionless import Schema

schema = Schema()
schema.fields = {} # this must be a list
schema.to_yaml('tmp/invalid.schema.yaml')
```

And let's validate this schema using the command-line interface:


```bash title="CLI"
frictionless validate tmp/invalid.schema.yaml
```
```
---
invalid: tmp/invalid.schema.yaml
---
============  ===============================================================================================================================================================================
code          message
============  ===============================================================================================================================================================================
schema-error  The data source could not be successfully described by the invalid Table Schema: "{} is not of type 'array'" at "fields" in metadata and at "properties/fields/type" in profile
============  ===============================================================================================================================================================================
```

We see that the schema is invalid and the error is displayed. Schema validation can be very useful when you work with different classes of tables and create schemas for them. Using this function will ensure that the metadata is valid.

## Validating Resource

As it was shown in the ["Describing Data" guide](https://framework.frictionlessdata.io/docs/guides/describing-data), a resource is a container having both metadata and data. We need to create a resource descriptor and then we can validate it:

```bash title="CLI"
frictionless describe data/capital-invalid.csv --json > tmp/capital.resource.json
```

Let's now use the command-line interface to ensure that we are getting the same result that we got without using a resource:

```bash title="CLI"
frictionless validate tmp/capital.resource.json --basepath .
```
```
---
invalid: ./data/capital-invalid.csv
---

====  =====  ================  ====================================================================================================================
row   field  code              message
====  =====  ================  ====================================================================================================================
None      3  duplicate-header  Header "name" in field at position "3" is duplicated to header in another field: at position "2"
  10      3  missing-cell      Row at position "10" has a missing cell in field "name2" at position "3"
  11  None   blank-row         Row at position "11" is completely blank
  12      4  extra-cell        Row at position "12" has an extra value in field at position "4"
  12      1  type-error        The cell "x" in row at position "12" and field "id" at position "1" has incompatible type: type is "integer/default"
====  =====  ================  ====================================================================================================================
```

Okay, why do we need to use a resource descriptor if the result is the same? The reason is metadata + data packaging. Let's extend our resource descriptor to show how you can edit and validate metadata:

```python title="Python"
from frictionless import describe

resource = describe('data/capital-invalid.csv')
resource['bytes'] = 100 # this is wrong
resource['hash'] = 'ae23c74693ca2d3f0e38b9ba3570775b' # this is wrong
resource.to_yaml('tmp/capital.resource.yaml')
```

We have added a few bad metrics to our resource descriptor. Now, the validation below reports it these errors in addition to all the errors we had before. This example shows how concepts like Data Resource can be extremely useful when working with data.

```bash title="CLI"
frictionless validate tmp/capital.resource.yaml --basepath .
```
```
---
invalid: data/capital-invalid.csv
---

====  =====  ================  ===========================================================================================================================================================
row   field  code              message
====  =====  ================  ===========================================================================================================================================================
None      3  duplicate-label   Label "name" in the header at position "3" is duplicated to a label: at position "2"
  10      3  missing-cell      Row at position "10" has a missing cell in field "name2" at position "3"
  11  None   blank-row         Row at position "11" is completely blank
  12      1  type-error        The cell "x" in row at position "12" and field "id" at position "1" has incompatible type: type is "integer/default"
  12      4  extra-cell        Row at position "12" has an extra value in field at position "4"
None  None   hash-count-error  The data source does not match the expected hash count: expected md5 is "ae23c74693ca2d3f0e38b9ba3570775b" and actual is "dcdeae358cfd50860c18d953e021f836"
None  None   byte-count-error  The data source does not match the expected byte count: expected is "100" and actual is "171"
====  =====  ================  ===========================================================================================================================================================

```

## Validating Package

A package is a set of resources + additional metadata. To showcase a package validation we need to use one more tabular file:

```bash title="CLI"
cat data/capital-valid.csv
```
```csv  title="data/capital-valid.csv"
id,name
1,London
2,Berlin
3,Paris
4,Madrid
5,Rome
```

Let's describe and validate a package:

```bash title="CLI"
frictionless describe data/capital-*id.csv --json > tmp/capital.package.json
frictionless validate tmp/capital.package.json --basepath .
```
```
---
invalid: ./data/capital-invalid.csv
---

====  =====  ================  ====================================================================================================================
row   field  code              message
====  =====  ================  ====================================================================================================================
None      3  duplicate-header  Header "name" in field at position "3" is duplicated to header in another field: at position "2"
  10      3  missing-cell      Row at position "10" has a missing cell in field "name2" at position "3"
  11  None   blank-row         Row at position "11" is completely blank
  12      4  extra-cell        Row at position "12" has an extra value in field at position "4"
  12      1  type-error        The cell "x" in row at position "12" and field "id" at position "1" has incompatible type: type is "integer/default"
====  =====  ================  ====================================================================================================================


---
valid: ./data/capital-valid.csv
---
```

As we can see, the result is pretty straight-forward and expected: we have one invalid resource and one valid resource. One important note regarding the package validation: if there is more than one resource, it will use multiprocessing to speed up the process.

## Validating Inquiry

Inquiry gives you an ability to create arbitrary validation jobs containing a set of individual validation tasks. Let's create an Inquiry that includes an individual file validation and a resource validation:

```python title="Python"
from frictionless import Inquiry

inquiry = Inquiry({'tasks': [
  {'source': 'data/capital-valid.csv'},
  {'source': 'tmp/capital.resource.json', 'basepath': '.'},
]})
inquiry.to_yaml('tmp/capital.inquiry.yaml')
```

Tasks in the Inquiry accept the same arguments written in camelCase as the corresponding `validate` functions have. As usual, let's run validation:

```bash title="CLI"
frictionless validate tmp/capital.inquiry.yaml
```
```
---
valid: data/capital-valid.csv
---
---
invalid: ./data/capital-invalid.csv
---

====  =====  ================  ====================================================================================================================
row   field  code              message
====  =====  ================  ====================================================================================================================
None      3  duplicate-header  Header "name" in field at position "3" is duplicated to header in another field: at position "2"
  10      3  missing-cell      Row at position "10" has a missing cell in field "name2" at position "3"
  11  None   blank-row         Row at position "11" is completely blank
  12      4  extra-cell        Row at position "12" has an extra value in field at position "4"
  12      1  type-error        The cell "x" in row at position "12" and field "id" at position "1" has incompatible type: type is "integer/default"
====  =====  ================  ====================================================================================================================
```

At first sight, it might not be clear why such a construct exists, but when your validation workflow gets complex, the Inquiry can provide a lot of flexibility and power. Last but not least, the Inquiry will use multiprocessing if there is more than 1 task provided.

## Validation Report

All the `validate` functions return a Validation Report. This is a unified object containing information about a validation: source details, the error, etc. Let's explore a report:

```python title="Python"
from pprint import pprint
from frictionless import validate

report = validate('data/capital-invalid.csv', pick_errors=['duplicate-header'])
pprint(report)
```
```
{'errors': [],
 'stats': {'errors': 0, 'tasks': 1},
 'tasks': [{'errors': [],
            'partial': False,
            'resource': {'encoding': 'utf-8',
                         'format': 'csv',
                         'hashing': 'md5',
                         'name': 'capital-invalid',
                         'path': 'data/capital-invalid.csv',
                         'profile': 'tabular-data-resource',
                         'schema': {'fields': [{'name': 'id',
                                                'type': 'integer'},
                                               {'name': 'name',
                                                'type': 'string'},
                                               {'name': 'name2',
                                                'type': 'string'}]},
                         'scheme': 'file',
                         'stats': {'bytes': 171,
                                   'fields': 3,
                                   'hash': 'dcdeae358cfd50860c18d953e021f836',
                                   'rows': 11}},
            'scope': [],
            'stats': {'errors': 0},
            'time': 0.023,
            'valid': True}],
 'time': 0.023,
 'valid': True,
 'version': '4.0.4'}
```

As we can see, there is a lot of information; you can find a detailed description of the Validation Report in the [API Reference](../references/api-reference.md). Errors are grouped by tables; for some validation there can be dozens of tables. Let's use the `report.flatten` function to simplify the representation of errors:

```python title="Python"
from pprint import pprint
from frictionless import validate

report = validate("data/capital-invalid.csv", pick_errors=["duplicate-label"])
pprint(report.flatten(["rowPosition", "fieldPosition", "code", "message"]))
```
```
[[None,
  3,
  'duplicate-label',
  'Label "name" in the header at position "3" is duplicated to a label: at '
  'position "2"']]
```

In some situations, an error can't be associated with a table; then it goes to the top-level `report.errors` property:

```python title="Python"
from pprint import pprint
from frictionless import validate_schema

report = validate_schema("bad.json")
pprint(report)
```
```
{'errors': [{'code': 'schema-error',
             'description': 'Provided schema is not valid.',
             'message': 'Schema is not valid: cannot extract metadata '
                        '"bad.json" because "[Errno 2] No such file or '
                        'directory: \'bad.json\'"',
             'name': 'Schema Error',
             'note': 'cannot extract metadata "bad.json" because "[Errno 2] No '
                     'such file or directory: \'bad.json\'"',
             'tags': ['#general']}],
 'stats': {'errors': 1, 'tasks': 0},
 'tasks': [],
 'time': 0.0,
 'valid': False,
 'version': '4.0.4'}
```

## Validation Errors

The Error object is at the heart of the validation process. The Report has `report.errors` and `report.tables[].errors` properties that can contain the Error object. Let's explore it:

```python title="Python"
from frictionless import validate

report = validate("data/capital-invalid.csv", pick_errors=["duplicate-label"])
error = report.task.error  # it's only available for 1 table / 1 error sitution
print(f'Code: "{error.code}"')
print(f'Name: "{error.name}"')
print(f'Tags: "{error.tags}"')
print(f'Note: "{error.note}"')
print(f'Message: "{error.message}"')
print(f'Description: "{error.description}"')
```
```
Code: "duplicate-label"
Name: "Duplicate Label"
Tags: "['table', '#header', 'label']"
Note: "at position "2""
Message: "Label "name" in the header at position "3" is duplicated to a label: at position "2""
Description: "Two columns in the header row have the same value. Column names should be unique."
```

Above, we have listed universal error properties. Depending on the type of an error there can be additional ones. For example, for our `duplicate-header` error:

```python title="Python"
from pprint import pprint
from frictionless import validate

report = validate("data/capital-invalid.csv", pick_errors=["duplicate-label"])
error = report.task.error  # it's only available for 1 table / 1 error sitution
pprint(error)
```
```
{'code': 'duplicate-label',
 'description': 'Two columns in the header row have the same value. Column '
                'names should be unique.',
 'fieldName': 'name2',
 'fieldNumber': 3,
 'fieldPosition': 3,
 'label': 'name',
 'labels': ['id', 'name', 'name'],
 'message': 'Label "name" in the header at position "3" is duplicated to a '
            'label: at position "2"',
 'name': 'Duplicate Label',
 'note': 'at position "2"',
 'rowPositions': [1],
 'tags': ['table', '#header', 'label']}
```

Please explore the "Errors Reference" to learn about all the available errors and their properties.

## Available Checks

> Note that only the Baseline Check is enabled by default. Other built-in checks need to be activated as shown below.

There are various validation checks included in the core Frictionless Framework along with an ability to create custom checks. You can provide a list of checks where individual checks are in the form of:
- a dict: `{'code': 'code', 'option1': 'value1'}`
- an object: `checks.code(option1='value1')`

```python title="Python"
from pprint import pprint
from frictionless import validate, checks

checks = [checks.sequential_value(field_name='id')]
report = validate('data/capital-invalid.csv', checks=checks)
pprint(report.flatten(["rowPosition", "fieldPosition", "code", "note"]))
```
```
[[None, 3, 'duplicate-label', 'at position "2"'],
 [10, 3, 'missing-cell', ''],
 [10, 1, 'sequential-value', 'the value is not sequential'],
 [11, None, 'blank-row', ''],
 [12, 1, 'type-error', 'type is "integer/default"'],
 [12, 4, 'extra-cell', '']]
```

See [Validation Checks](validation-checks.md) for a list of available checks.

## Custom Checks

There are many cases when built-in Frictionless checks are not enough. For instance, you might want to create a business logic rule or specific quality requirement for the data. With Frictionless it's very easy to use your own custom checks. Let's see with an example:

```python title="Python"
from pprint import pprint
from frictionless import validate, errors

# Create check
def forbidden_two(row):
    if row['header'] == 2:
        note = '2 is forbidden!'
        yield errors.CellError.from_row(row, note=note, field_name='header')

# Validate table
source = b'header\n1\n2\n3'
report = validate(source,  format='csv', checks=[forbidden_two])
pprint(report.flatten(["rowPosition", "fieldPosition", "code", "note"]))
```
```
[[3, 1, 'cell-error', 'number 2 is forbidden!']]
```

Usually, it also makes sense to create a custom error for your custom check. The Check class provides other useful methods like `validate_header` etc. Please read the "API Reference" to learn it in detail.

Learn more about custom checks in the [Check Guide](extension/check-guide.md).

## Pick/Skip Errors

We can pick or skip errors by providing a list of error codes. For example:

```python title="Python"
from pprint import pprint
from frictionless import validate

report1 = validate("data/capital-invalid.csv", pick_errors=["duplicate-label"])
report2 = validate("data/capital-invalid.csv", skip_errors=["duplicate-label"])
pprint(report1.flatten(["rowPosition", "fieldPosition", "code"]))
pprint(report2.flatten(["rowPosition", "fieldPosition", "code"]))
```
```
[[None, 3, 'duplicate-label']]
[[10, 3, 'missing-cell'],
 [11, None, 'blank-row'],
 [12, 1, 'type-error'],
 [12, 4, 'extra-cell']]
```

It's also possible to use error tags (for more information please consult the [Errors Reference](../references/errors-reference.md)):

```python title="Python"
from pprint import pprint
from frictionless import validate

report1 = validate("data/capital-invalid.csv", pick_errors=["#header"])
report2 = validate("data/capital-invalid.csv", skip_errors=["#row"])
pprint(report1.flatten(["rowPosition", "fieldPosition", "code"]))
pprint(report2.flatten(["rowPosition", "fieldPosition", "code"]))
```
```
[[None, 3, 'duplicate-label']]
[[None, 3, 'duplicate-label']]
```

## Limit Errors

This option allows you to limit the amount of errors, and can be used when you need to "fail fast":

```python title="Python"
from pprint import pprint
from frictionless import validate

report = validate("data/capital-invalid.csv", limit_errors=1)
pprint(report.flatten(["rowPosition", "fieldPosition", "code"]))
```
```
[[None, 3, 'duplicate-label']]
```

## Limit Memory

Frictionless is a streaming engine; usually it's possible to validate terrabytes of data with basically O(1) memory consumption. For some validation, it's not the case because Frctionless needs to buffer some cells e.g. to check uniqueness. Here memory management can be handy.

The default memory limit is 1000MB. You can adjust this based on your exact use case. For example, if you're running Frictionless as an API server you might reduce the memory usage. If a validation hits the limit it will not raise a failure - it will return a report with a task error:

```python title="Python"
from frictionless import validate

source = lambda: ([integer] for integer in range(1, 100000000))
schema = {"fields": [{"name": "integer", "type": "integer"}], "primaryKey": "integer"}
report = validate(source, headers=False, schema=schema, limit_memory=50)
print(report.flatten(["code", "note"]))
```
```
[['task-error', 'exceeded memory limit "50MB"']]
```