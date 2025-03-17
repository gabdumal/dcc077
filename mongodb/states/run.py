from . import schema
from . import insert
from . import indexes


def run(db):
    schema.run(db)
    insert.run(db)
    indexes.run(db)
