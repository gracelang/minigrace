type Timer = interface { }

method every (millisec) do (code) -> Timer { }
method after (millisec) do (code) -> Timer { }
method stop(id:Timer) { }
method stopAll { }
