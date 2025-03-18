from . import schema
from . import indexes
from . import insert


def run(db):
    schema.run(db)
    indexes.run(db)
    insert.run(db)
