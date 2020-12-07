So far if we've had to compile one file at a time using the `tsc <file>` command.

But what if we wanted to compile multiple TS files at once?
For this, we can use the command `tsc --init` within the folder where our TS files are located.

```
$ cd <navigate to folder containing TS files>

$ tsc --init

# Now we can only run tsc command

$ tsc

# We can also use the watch mode

$ tsc --watch

```
