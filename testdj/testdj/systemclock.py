from TestModel.models import sysclock

def clock():
    datat = sysclock.objects.get(id=1)
    hours=datat.time[-6:-4]
    days = datat.time[-8:-6]
    months=datat.time[-10:-8]
    years=datat.time[:4]
    time=ckcompute(years,months,days,hours)
    if(time=='20181202000000'):
        time='20181030000000'
    datat.time=time
    datat.save()


def ckcompute(years,months,days,hours):
    years = int(years)
    months = int(months)
    days = int(days)
    hours = int(hours)
    days = days + 1
    if (hours == 24):
        hours = 0
        days = days + 1
    if (days == 32 and (
            months == 1 or months == 3 or months == 5 or months == 7 or months == 8 or months == 10 or months == 12)):
        days = 1
        months = months + 1
    if (days == 31 and (months == 4 or months == 6 or months == 9 or months == 11)):
        days = 1
        months = months + 1
    if ((days == 30 and months == 2 and years % 4 == 0) or (days == 29 and months == 2 and years % 4 != 0)):
        days = 1
        months = months + 1
    if (months == 13):
        months = 1
        years = years + 1
    years = str(years)
    months = str(months)
    days = str(days)
    hours = str(hours)

    if (len(hours) == 1):
        hours = '0' + hours
    if (len(days) == 1):
        days = '0' + days
    if (len(months) == 1):
        months = '0' + months
    time = years + months + days + hours + '0000'
    return time


