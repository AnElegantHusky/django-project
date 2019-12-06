/************************
jquery-datepair v1.2.13
http://jonthornton.github.com/jquery-datepair/

requires jQuery 1.7+
************************/


(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($106) {
	var _ONE_DAY = 86400000;
	var _defaults =	{
		startClass: 'start',
		endClass: 'end',
		timeClass: 'time',
		dateClass: 'date',
		defaultDateDelta: 0,
		defaultTimeDelta: 3600000,
		parseTime: function($106input){
			return $106input.timepicker('getTime');
		},
		updateTime: function($106input, dateObj){
			$106input.timepicker('setTime', dateObj);
		},
		parseDate: function($106input){
			return $106input.datepicker('getDate');
		},
		updateDate: function($106input, dateObj){
			$106input.datepicker('update', dateObj);
		},
		setMinTime: function($106input, dateObj){
			$106input.timepicker('option', 'minTime', dateObj);
		}
	};

	var methods =
	{
		init: function(options)
		{
			return this.each(function()
			{
				var $106self = $106(this);

				var settings = $106.extend({}, _defaults);

				if (options) {
					settings = $106.extend(settings, options);
				}

				settings = _parseSettings(settings);

				$106self.data('datepair-settings', settings);
				_bindChangeHandler($106self);

				// initialize datepair-datedelta
				var $106startDateInput = _getStartDateInput($106self);
				var $106endDateInput = _getEndDateInput($106self);

				if ($106startDateInput.val() && $106endDateInput.val()) {
					var startDate = settings.parseDate($106startDateInput);
					var endDate = settings.parseDate($106endDateInput);
					$106self.data('datepair-datedelta', endDate.getTime() - startDate.getTime());
				} else {
					$106self.data('datepair-datedelta', null);
				}

				// initialize datepair-timedelta
				var $106startTimeInput = _getStartTimeInput($106self);
				var $106endTimeInput = _getEndTimeInput($106self);

				if ($106startTimeInput.val() && $106endTimeInput.val()) {
					var startTime = settings.parseTime($106startTimeInput);
					var endTime = settings.parseTime($106endTimeInput);
					$106self.data('datepair-timedelta', endTime.getTime() - startTime.getTime());
				} else {
					$106self.data('datepair-timedelta', null);
				}

				_updateEndMintime($106self);
			});
		},

		option: function(key, value)
		{
			var self = this;
			var settings = self.data('datepair-settings');

			if (typeof key == 'object') {
				settings = $106.extend(settings, key);

			} else if (typeof key == 'string' && typeof value != 'undefined') {
				settings[key] = value;

			} else if (typeof key == 'string') {
				return settings[key];
			}

			settings = _parseSettings(settings);

			self.data('datepair-settings', settings);

			return self;
		},

		getTimeDiff: function()
		{
			$106self = this;
			return $106self.data('datepair-datedelta') * _ONE_DAY + $106self.data('datepair-timedelta');
		},

		remove: function()
		{
			var $106self = this;
			$106self.removeData('datepair-settings');
			_unbindChangeHandler($106self)

			return $106self;
		}
	};

	// private methods

	function _parseSettings(settings)
	{
		// if (settings.startClass) {
		// 	settings.minTime = _time2int(settings.minTime);
		// }

		return settings;
	}

	function _bindChangeHandler($106self)
	{
		$106self.on('change.datepair', null, _inputChanged);
	}

	function _unbindChangeHandler($106self)
	{
		$106self.off('change.datepair');
	}

	function _inputChanged(e)
	{
		var $106self = $106(this);

		// temporarily unbind the change handler to prevent triggering this
		// if we update other inputs
		_unbindChangeHandler($106self);

		var settings = $106self.data('datepair-settings');
		var $106target = $106(e.target);

		if ($106target.hasClass(settings.dateClass)) {
			if ($106target.val() != '') {
				_dateChanged($106self, $106target);
			} else {
				$106self.data('datepair-datedelta', null);
			}

		} else if ($106target.hasClass(settings.timeClass)) {
			if ($106target.val() != '') {
				_timeChanged($106self, $106target);
			} else {
				$106self.data('datepair-timedelta', null);
			}
		}

		_validateRanges($106self);
		_updateEndMintime($106self)
		_bindChangeHandler($106self);
	}

	function _getStartDateInput($106self)
	{
		var settings = $106self.data('datepair-settings');
		return $106self.find('.'+settings.startClass+'.'+settings.dateClass);
	}

	function _getEndDateInput($106self)
	{
		var settings = $106self.data('datepair-settings');
		return $106self.find('.'+settings.endClass+'.'+settings.dateClass);
	}

	function _getStartTimeInput($106self)
	{
		var settings = $106self.data('datepair-settings');
		return $106self.find('.'+settings.startClass+'.'+settings.timeClass);
	}

	function _getEndTimeInput($106self)
	{
		var settings = $106self.data('datepair-settings');
		return $106self.find('.'+settings.endClass+'.'+settings.timeClass);
	}

	function _dateChanged($106self, $106target)
	{
		var settings = $106self.data('datepair-settings');

		var $106startDateInput = _getStartDateInput($106self);
		var $106endDateInput = _getEndDateInput($106self);

		if (!$106startDateInput.length || !$106endDateInput.length) {
			return
		}

		if (!$106startDateInput.val() || !$106endDateInput.val()) {
			if (settings.defaultDateDelta !== null) {
				if ($106startDateInput.val()) {
					var startDate = settings.parseDate($106startDateInput);
					var newEnd = new Date(startDate.getTime() + settings.defaultDateDelta * _ONE_DAY);
					settings.updateDate($106endDateInput, newEnd);
				} else if ($106endDateInput.val()) {
					var endDate = settings.parseDate($106endDateInput);
					var newStart = new Date(endDate.getTime() - settings.defaultDateDelta * _ONE_DAY);
					settings.updateDate($106startDateInput, newStart);
				}

				$106self.data('datepair-datedelta', settings.defaultDateDelta * _ONE_DAY);
			} else {
				$106self.data('datepair-datedelta', null);
			}

			return;
		}

		var startDate = settings.parseDate($106startDateInput);
		var endDate = settings.parseDate($106endDateInput);

		if ($106target.hasClass(settings.startClass)) {
			var newEndDate = new Date(startDate.getTime()+$106self.data('datepair-datedelta'));
			settings.updateDate($106endDateInput, newEndDate);
		} else if ($106target.hasClass(settings.endClass)) {
			if (endDate < startDate) {
				$106self.data('datepair-datedelta', 0);
				settings.updateDate($106startDateInput, endDate);
			} else {
				$106self.data('datepair-datedelta', endDate.getTime() - startDate.getTime());
			}
		}
	}

	function _updateEndMintime($106self)
	{
		var settings = $106self.data('datepair-settings');
		if (typeof settings.setMinTime != 'function') return;

		var startTime = null;
		if (!$106self.data('datepair-datedelta') || $106self.data('datepair-datedelta') < _ONE_DAY
				|| ($106self.data('datepair-timedelta') && $106self.data('datepair-datedelta') + $106self.data('datepair-timedelta') < _ONE_DAY)) {
			var $106startTimeInput = _getStartTimeInput($106self);
			startTime = settings.parseTime($106startTimeInput);
		}

		var $106endTimeInput = _getEndTimeInput($106self);
		settings.setMinTime($106endTimeInput, startTime);
	}

	function _timeChanged($106self, $106target)
	{
		var settings = $106self.data('datepair-settings');

		var $106startTimeInput = _getStartTimeInput($106self);
		var $106endTimeInput = _getEndTimeInput($106self);

		if (!$106startTimeInput.length || !$106endTimeInput.length) {
			return
		}

		if (!$106startTimeInput.val() || !$106endTimeInput.val()) {
			if (settings.defaultTimeDelta !== null) {
				if ($106startTimeInput.val()) {
					var startTime = settings.parseTime($106startTimeInput);
					var newEnd = new Date(startTime.getTime() + settings.defaultTimeDelta);
					settings.updateTime($106endTimeInput, newEnd);
				} else if ($106endTimeInput.val()) {
					var endTime = settings.parseTime($106endTimeInput);
					var newStart = new Date(endTime.getTime() - settings.defaultTimeDelta);
					settings.updateTime($106startTimeInput, newStart);
				}

				$106self.data('datepair-timedelta', settings.defaultTimeDelta);
			} else {
				$106self.data('datepair-timedelta', null);
			}

			return;
		}

		var startTime = settings.parseTime($106startTimeInput);
		var endTime = settings.parseTime($106endTimeInput);

		if ($106target.hasClass(settings.startClass)) {
			var newEndTime = new Date(startTime.getTime()+$106self.data('datepair-timedelta'));
			settings.updateTime($106endTimeInput, newEndTime);
			endTime = settings.parseTime($106endTimeInput);
		}

		if ((endTime.getTime() - startTime.getTime()) * $106self.data('datepair-timedelta') < 0) {
			var $106endDateInput = _getEndDateInput($106self);
			if ($106endDateInput.val()) {
				var offset = (endTime < startTime) ? _ONE_DAY : -1 * _ONE_DAY;
				var endDate = settings.parseDate($106endDateInput);
				settings.updateDate($106endDateInput, new Date(endDate.getTime() + offset));
				_dateChanged($106self, $106endDateInput);
			}
		}

		$106self.data('datepair-timedelta', endTime.getTime() - startTime.getTime());
	}

	function _validateRanges($106self)
	{
		var $106startTimeInput = _getStartTimeInput($106self);
		var $106endTimeInput = _getEndTimeInput($106self);

		if ($106startTimeInput.length && $106endTimeInput.length && $106self.data('datepair-timedelta') === null) {
			$106self.trigger('rangeIncomplete');
			return;
		}

		var $106startDateInput = _getStartDateInput($106self);
		var $106endDateInput = _getEndDateInput($106self);
		if ($106startDateInput.length && $106endDateInput.length && $106self.data('datepair-datedelta') === null) {
			$106self.trigger('rangeIncomplete');
			return;
		}

		if ($106self.data('datepair-datedelta') + $106self.data('datepair-timedelta') >= 0) {
			$106self.trigger('rangeSelected');
		} else {
			$106self.trigger('rangeError');
		}
	}


	// Plugin entry
	$106.fn.datepair = function(method)
	{
		if(methods[method]) { return methods[method].apply(this, Array.prototype.slice.call(arguments, 1)); }
		else if(typeof method === "object" || !method) { return methods.init.apply(this, arguments); }
		else { $106.error("Method "+ method + " does not exist on jQuery.datepair"); }
	};
}));
