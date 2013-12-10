SAMPLES = logo simplegraphics_example
SAMPLES_JS = $(addsuffix .js,$(SAMPLES))

all: $(SAMPLES_JS)


%.js: %.grace
	../../minigrace --target js -o $@ $<

clean:
	rm -f *.gso *.gct *.gcn *.c *.js
