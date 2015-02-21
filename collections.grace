type Block0<R> = collections.Block0<R>
type Block1<T,R> = collections.Block1<T,R>
type Block2<S,T,R> = collections.Block1<T,R>

type Collection = collections.Collection
type Dictionary = collections.Dictionary
type Binding = collections.Binding
type Iterator<T> = collections.Iterator<T>
type CollectionFactory = collections.CollectionFactory
type EmptyCollectionFactory = collections.EmptyCollectionFactory

def BoundsError is public = collections.BoundsError
def Exhausted is public = collections.Exhausted
def NoSuchObject is public = collections.NoSuchObject
def RequestError is public = collections.RequestError

def boundsError = BoundsError
def noSuchObject = NoSuchObject
def exhausted = Exhausted
def requestError = RequestError

def collectionFactory is public = collections.collectionFactory
def iterable is public = collections.iterable
def enumerable is public = collections.enumerable
def list is public = collections.list
def set is public = collections.set
def dictionary is public = collections.dictionary
def binding is public = collections.binding
def range is public = collections.range
