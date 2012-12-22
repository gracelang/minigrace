all: StaticGrace.gso fsm.gso ObjectAssociations.gso dialect.gso

%.gso: %.grace
	../../minigrace --dynamic-module $<

clean:
	rm -f *.gso *.gct *.gcn *.c fsm-example ObjectAssociations-example dialectexample
