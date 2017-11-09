Flow Engine
=============================

Description
-----------
This is a simple *flow engine*.

Flow engine is an application that executes a flow consisting of linked rules against incoming data and each rule will contain:
- `id`
- `body`, that runs against the incoming data. (it's a function which takes a parameter and returns a boolean)
- `true_id`, that is the next rule to be executed if function returns true
- `false_id`, that is the next rule to be executed if function returns false

You can pass the incoming data (a simple JSON string parsed to a JavaScript object) to the created flow, to excute it!
The execution will end when `null` is provided for `true_id` or `false_id` accroding to what is the returned from related body function.
