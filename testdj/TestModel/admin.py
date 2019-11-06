from django.contrib import admin
from TestModel.models import Test, Contact, Tag ,Dic ,user1


# Register your models here.
class TagInline(admin.TabularInline):
    model = Tag


class ContactAdmin(admin.ModelAdmin):
    inlines = [TagInline]  # Inline
    list_display=('name','age','email')
    search_fields=('name',)
    fieldsets = (
        ['Main', {
            'fields': ('name', 'email'),
        }],
        ['Advance', {
            'classes': ('collapse',),
            'fields': ('age',),
        }]

    )
class Contact1Admin(admin.ModelAdmin):
    list_display=('COMMUNITY_NAME','MAIN_TYPE_NAME','SUB_TYPE_NAME','CREATE_TIME')
    search_fields=('COMMUNITY_NAME',)
    fieldsets = (
        ['Main', {
            'fields': ('COMMUNITY_NAME','MAIN_TYPE_NAME','SUB_TYPE_NAME','CREATE_TIME'),
        }],
        ['Advance', {
            'classes': ('details',),
            'fields': ('REPORT_NUM','EVENT_PROPERTY_NAME','EVENT_TYPE_ID','EVENT_TYPE_NAME','EVENT_SRC_NAME','DISTRICT_ID','INTIME_ARCHIVE_NUM','SUB_TYPE_ID','DISTRICT_NAME','COMMUNITY_ID','REC_ID','STREET_ID','OVERTIME_ARCHIVE_NUM','OPERATE_NUM','DISPOSE_UNIT_ID','STREET_NAME','EVENT_SRC_ID','INTIME_TO_ARCHIVE_NUM','EVENT_PROPERTY_ID','OCCUR_PLACE','DISPOSE_UNIT_NAME','MAIN_TYPE_ID','testtime'),
        }]

    )

admin.site.register(Contact, ContactAdmin)
admin.site.register([Test,user1])
admin.site.register(Dic,Contact1Admin)
