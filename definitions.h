
#if !defined(_POSIX_VERSION) || _POSIX_VERSION < 200809L
size_t mggetline(char **lineptr, size_t *n, FILE *stream)
#ifdef IN_GRACELIB
{
    size_t chars = 0;
    int c = 0;
    if (*lineptr == NULL) {
        *lineptr = malloc(128);
        *n = 128;
    }
    c = fgetc(stream);
    while (c != '\n') {
        if (c == EOF)
            break;
        (*lineptr)[chars++] = (unsigned char)c;
        if (chars == *n - 1) {
            *n *= 2;
            *lineptr = realloc(*lineptr, *n);
        }
        c = fgetc(stream);
    }
    (*lineptr)[chars] = 0;
    if (chars == 0)
        return -1;
    return chars + 1;
}
#else
;
#endif
#define getline(x,y,z) mggetline(x,y,z)
#endif

